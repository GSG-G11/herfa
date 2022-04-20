const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');

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
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = { Work };
