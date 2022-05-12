const { hash } = require('bcrypt');

const getDataToInsert = async (data) => {
  const { password, whatsapp } = data;
  const whatsappNumber = whatsapp.slice(2);
  const hashedPassword = await hash(password, 10);
  const dataToInsert = { ...data, password: hashedPassword, whatsapp: whatsappNumber };
  return dataToInsert;
};
module.exports = { getDataToInsert };
