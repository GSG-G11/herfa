const { Work, User } = require('../../database/models');
const { customError } = require('../errors');
const { workIdValidation } = require('../../utils/validation');

const getWorkPerPage = async (req, res, next) => {
  try {
    const { providerId } = req.params;
    const { page } = req.query;
    const objectToValidation = { userId: providerId, pageNum: page };
    const { userId, pageNum } = await workIdValidation.validateAsync(objectToValidation);
    const user = await User.findByPk(userId);
    if (!user) {
      throw customError('User not found', 400);
    }
    const pageData = await Work.findAll({
      limit: 4,
      offset: (pageNum - 1) * 4,
      where: { userId }, // conditions
    });
    res.json({ msg: 'work page', data: pageData });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(customError(error.message, 400));
    } else { next(error); }
  }
};

module.exports = { getWorkPerPage };
