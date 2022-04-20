const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { MainServices } = require('./mainServices');
// const { User } = require('./user');

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
  // main_service_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'main_services',
  //     key: 'id',
  //   },
  // },
});

MainServices.hasMany(SubServices);
SubServices.belongsTo(MainServices);

// SubServices.belongsToMany(User);
// User.belongsToMany(SubServices);

module.exports = { SubServices };
