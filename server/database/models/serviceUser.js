const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { SubServices } = require('./subServices');
const { User } = require('./user');

const ServiceUser = sequelize.define(
  'services_user',
  {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    serviceId: {
      type: Sequelize.INTEGER,
      references: {
        model: SubServices,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  },
);
module.exports = { ServiceUser };
