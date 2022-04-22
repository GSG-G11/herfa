const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');

const Location = sequelize.define('locations', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = { Location };
