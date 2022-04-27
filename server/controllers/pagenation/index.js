const { Work, User } = require('../../database/models');
const { customError } = require('../errors');
const { workIdValidation } = require('../../utils/validation');

const getPageData = async (req, res, next) => {
  try {
    const { providerId } = req.params;
    const { page } = req.query;
    const objectToValidation = { userId: providerId, pageNum: page };
    const { userId, pageNum } = await workIdValidation.validateAsync(objectToValidation);
    const user = await User.findByPk(userId);
    if (!user) {
      throw customError('User not found', 404);
    }
    const pageData = await Work.findAndCountAll({
      limit: 4,
      offset: (pageNum - 1) * 4,
      where: { userId }, // conditions
    });
    if (!pageData.count) {
      throw customError('There Is No Works', 400);
    }
    res.json({ msg: 'work page', data: pageData });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(customError(error.message, 400));
    }
    next(error);
  }
};

module.exports = { getPageData };
