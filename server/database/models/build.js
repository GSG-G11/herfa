const { sequelize } = require('../config');
const { Work } = require('./work');
const { User } = require('./user');
const { Location } = require('./location');

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
const work1 = { title: 'saleh ti', content: 'fsdfsdf', user_id: 2 };
sequelize.sync({ force: true });
const user = await User.create(user1);
console.log(user);
const work = await Work.create(work1);
console.log(work);
