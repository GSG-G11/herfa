const { Sequelize } = require('sequelize');
require('env2')('.env');

const sequelize = new Sequelize(process.env.DB_URL);
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
