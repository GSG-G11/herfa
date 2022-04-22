const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { User } = require('./user');

const Work = sequelize.define('works', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
Work.belongsTo(User);

module.exports = { Work };
