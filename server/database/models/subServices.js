const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { MainServices } = require('./mainServices');
const { ServiceUser } = require('./serviceUser');
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

SubServices.belongsToMany(User, { through: ServiceUser });
User.belongsToMany(SubServices, { through: ServiceUser });

module.exports = { SubServices };
