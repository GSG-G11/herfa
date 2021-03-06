const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { Location } = require('./location');
const { MainServices } = require('./mainServices');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  whatsapp: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  facebook_link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  instagram_link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
User.belongsTo(Location);
User.belongsTo(MainServices);
module.exports = { User };
