const { sequelize } = require('../config');
const { User } = require('./user');

const user1 = {
  first_name: 'sa',
  last_name: 'sa',
  email: 'sa',
  password: 'sa',
  phone: 'sa',
  whatsapp: 'sa',
  location_id: 1,
  image: 'sa',
  description: 'sa',
  link: 'sa',
};
sequelize.sync({ force: true });
const user = await User.create(user1);
console.log(user);
