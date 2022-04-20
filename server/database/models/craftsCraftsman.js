const { Sequelize } = require('sequelize');
const { sequelize } = require('../config');
const { User } = require('./user');

const CraftsCraftsman = sequelize.define('crafts_craftsman', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  main_service_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
});

User.hasOne(CraftsCraftsman);
CraftsCraftsman.belongsTo(User);
// const CraftsCraftsman = sequelize.define('crafts_craftsman', {
//   service_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: SubServices,
//       key: 'id',
//     },
//   },
//   craftsman_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: User,
//       key: 'id',
//     },
//   },
// });

// SubServices.belongsToMany(User, { through: CraftsCraftsman });
// User.belongsToMany(SubServices, { through: CraftsCraftsman });

module.exports = { CraftsCraftsman };
