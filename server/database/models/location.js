const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { User } = require('./user');

const Location = sequelize.define('locations', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
User.hasOne(Location);
Location.belongsTo(User);
module.exports = { Location };
