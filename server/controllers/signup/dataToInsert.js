const { hash } = require('bcrypt');

const getDataToInsert = async (data) => {
  const { password, whatsapp } = data;
  // whats number should com from request body as 00972592123456
  // and to jump to whatsapp chat number should be 972592123456
  // so I have to remove 00 from number which is coming from request body
  const whatsappNumber = whatsapp.slice(2);
  const hashedPassword = await hash(password, 10);
  const dataToInsert = { ...data, password: hashedPassword, whatsapp: whatsappNumber };
  return dataToInsert;
};
module.exports = { getDataToInsert };
