const { editUserValidation } = require('../../utils/validation');
const { User } = require('../../database/models');
const { customError } = require('../errors');

const editUserData = async (req, res, next) => {
  try {
    const { providerID } = req;
    const data = await editUserValidation.validateAsync({ ...req.body, id: req.params.id });
    const isUser = await User.findByPk(data.id);
    if (!isUser) throw customError('User not found', 404);
    if (data.id !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    const existsPhone = await User.findOne({ where: { phone: data.phone } });
    if (existsPhone && existsPhone?.id !== data.id) throw customError('Phone is used try another one', 400);
    let whatsappNumber = data?.whatsapp;
    if (data.whatsapp) {
      whatsappNumber = data.whatsapp.slice(2);
    }
    await User.update(
      { ...data, whatsapp: whatsappNumber },
      {
        where: { id: data.id },
      },
    );
    await isUser.setServices(data.subservice);
    return res.json({
      msg: 'User data updated',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = { editUserData };
