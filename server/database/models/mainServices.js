const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');

const MainServices = sequelize.define(
  'main_services',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = { MainServices };
