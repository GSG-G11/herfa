const { paramsValidation, editUserValidation } = require('../../utils/validation');
const { User } = require('../../database/models');
const { customError } = require('../errors');

const editUserData = async (req, res, next) => {
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
    await isUser.setServices(data.subservice);
    return res.json({
      msg: 'User data updated',
      data: user,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = { editUserData };
