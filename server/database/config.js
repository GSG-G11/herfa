const { Sequelize } = require('sequelize');
require('env2')('.env');

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let dbUrl = '';
if (NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
} else if (NODE_ENV === 'development') {
  dbUrl = DEV_DB_URL;
} else if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else {
  throw new Error('No Database is found !');
}

const sequelize = new Sequelize(dbUrl);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
sequelize.sync({ force: true });
module.exports = { sequelize };
