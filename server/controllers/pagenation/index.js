const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { workIdValidation } = require('../../utils/validation');

const getPageData = async (req, res, next) => {
  try {
    const { providerId } = await workIdValidation.validateAsync(req.params);
    const { page } = req.query;
    const pageData = await Work.findAndCountAll({
      limit: 4,
      offset: (page - 1) * 4,
      where: { userId: providerId }, // conditions
    });
    res.json({ msg: 'work page', data: pageData });
  } catch (error) {
    next(customError('Database error', 502));
  }
};

module.exports = { getPageData };
