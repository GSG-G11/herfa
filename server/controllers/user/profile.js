const { Op } = require('sequelize');

const {
  Work,
  Review,
  Location,
  SubServices,
  User,
  MainServices,
} = require('../../database/models');
const { paramsValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const getProfileInfo = async (req, res, next) => {
  try {
    const { id } = await paramsValidation.validateAsync(req.params);
    const { page = 1 } = req.query;
    const user = await User.findByPk(id, {
      include: [
        { model: Location },
        { model: SubServices, duplicating: false },
        { model: MainServices },
      ],
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
    if (!user) {
      throw customError('user does not exist', 400);
    }
    const reviewsAndWorks = await Promise.all([
      Review.findAll({
        limit: 6,
        where: {
          userId: id,
          rate: {
            [Op.gt]: 3,
          },
        },
      }),
      Work.findAndCountAll({
        limit: 4,
        offset: (page - 1) * 4,
        where: {
          userId: id,
        },
      }),
    ]);
    const totalReviews = await Review.sum('rate', { where: { userId: id } }); // 50
    const count = await Review.count({ where: { userId: id } }); // 50
    const data = {
      user,
      reviews: reviewsAndWorks[0],
      works: reviewsAndWorks[1].rows,
      count: reviewsAndWorks[1].count,
      totalReviews: totalReviews / count,
    };
    res.status(200).json({ msg: "Profile user's information", data });
  } catch (error) {
    console.log(error);
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    next(error);
  }
};
module.exports = getProfileInfo;
