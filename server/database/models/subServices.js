const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { MainServices } = require('./mainServices');
const { User } = require('./user');

const SubServices = sequelize.define(
  'services',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

MainServices.hasMany(SubServices);
SubServices.belongsTo(MainServices);

SubServices.belongsToMany(User, { through: 'services_user' });
User.belongsToMany(SubServices, { through: 'services_user' });

module.exports = { SubServices };
