const { signToken } = require('../../utils');

const generateToken = async (user) => {
  const { id, first_name: fName, last_name: lName } = user;
  const providerName = `${fName} ${lName}`;
  const token = signToken(providerName, id);
  const data = { id, providerName };
  const dataAndToken = {
    data,
    token,
  };
  return dataAndToken;
};
module.exports = { generateToken };
