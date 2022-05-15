const { Op } = require('sequelize');
const { User } = require('../../database/models');

const checkIsUserExists = async (requestData) => {
  const { email, phone } = requestData;
  const existsUser = await User.findOne({
    where: {
      [Op.or]: [
        { email },
        { phone },
      ],
    },
  });
  let msg;
  if (existsUser?.email === email) {
    msg = 'Email is used try another one';
  } else if (existsUser?.phone === phone) {
    msg = 'Phone is used try another one';
  }
  return msg;
};
module.exports = { checkIsUserExists };
