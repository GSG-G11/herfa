const { ServiceUser } = require('../../database/models');

const insertSubServices = async (data, userId) => {
  const { subservice } = data;
  let subs = {};
  if (subservice.length) {
    subs = subservice.map((sub) => ({
      userId,
      serviceId: +sub,
    }));
    // create multiple records
    await ServiceUser.bulkCreate(subs);
  }
};
module.exports = { insertSubServices };
