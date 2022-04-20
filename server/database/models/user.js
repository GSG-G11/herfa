const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');

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
  },
  whatsapp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // Location model does not created yet, remove comment after location model created
    // references: {
    //   model: 'locations',
    //   key: 'id',
    // },
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = { User };
