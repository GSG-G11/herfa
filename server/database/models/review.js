const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { User } = require('./user');

const Review = sequelize.define('review', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNulla: false,
    unique: true,
  },
});

Review.belongsTo(User);

module.exports = { Review };
