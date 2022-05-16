const { paramsValidation, editUserValidation } = require('../../utils/validation');
const { User } = require('../../database/models');
const { customError } = require('../errors');
const { sequelize } = require('../../database/config');

const editUserData = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { providerID } = req;
    const { id: providerId } = await paramsValidation.validateAsync(req.params);
    const data = await editUserValidation.validateAsync(req.body);
    const isUser = await User.findByPk(providerId);
    if (!isUser) throw customError('User not found', 404);
    const existsPhone = await User.findOne({ where: { phone: data.phone } });
    if (existsPhone && existsPhone?.id !== providerId) throw customError('Phone is used try another one', 400);
    let whatsappNumber = data?.whatsapp;
    if (data.whatsapp) {
      whatsappNumber = data.whatsapp.slice(2);
    }
    if (providerId !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    const user = await User.update(
      { ...data, whatsapp: whatsappNumber },
      {
        where: { id: providerId },
      },
    );
    if (data.subservice?.length) {
      await sequelize.models.services_user.destroy(
        { where: { userId: providerId } },
        { transaction: t },
      );
      await isUser.addServices(data.subservice, { transaction: t });
      await t.commit();
    }
    return res.json({
      msg: 'User data updated',
      data: user,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(customError(err.message, 400));
    } if (err.name === 'SequelizeUniqueConstraintError') {
      await t.rollback();
      return next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = { editUserData };
