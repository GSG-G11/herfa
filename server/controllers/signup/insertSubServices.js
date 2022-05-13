const { ServiceUser } = require('../../database/models');

const insertSubServices = async (subservice, userId) => {
  let subs = {};
  subs = subservice.map((sub) => ({
    userId,
    serviceId: +sub,
  }));
  // create multiple records
  await ServiceUser.bulkCreate(subs);
};
module.exports = { insertSubServices };
