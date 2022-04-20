const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { MainServices } = require('./mainServices');

const SubServices = sequelize.define('services', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

MainServices.hasMany(SubServices);
SubServices.belongsTo(MainServices);

module.exports = { SubServices };
