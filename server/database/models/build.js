const { sequelize } = require('../config');
const { Work } = require('./work');
const { User } = require('./user');

const user = {
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
User.create(user).then((sa) => console.log(sa));
Work.create(work1).then((sa) => console.log(sa));
