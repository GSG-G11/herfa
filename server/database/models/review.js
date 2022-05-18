const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { User } = require('./user');

const Review = sequelize.define('reviews', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rate: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

Review.belongsTo(User);

module.exports = { Review };
