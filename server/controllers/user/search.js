const { Op, fn, col } = require('sequelize');

const { searchRequestValidation } = require('../../utils/validation');
const { customError } = require('../errors');
// --------------------- user nested include --------------------- //
// --------------------- internal server error ------------------- //
// locationId must be in group by clause ------------------------- //
// const users = await Review.findAll({
// attributes: [[fn('AVG', col('reviews.rate')), 'avgRating']],
//   include: [
//     {
//       model: User,
//       include: [
//         {
//           model: Location,
//           where: {
//             id: 1,
//           },
//         },
//       ],
//     },
//   ],
// });
//     return res.status(200).json({
//       success: true,
//       users,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// };

const {
  Location,
  SubServices,
  User,
  Review,
} = require('../../database/models');

const getSearchResult = async (req, res, next) => {
  try {
    const { name, location } = await searchRequestValidation.validateAsync(
      req.query,
    );
    console.log(req.query);
    const users = await User.findAll({
      where: {
        [Op.or]: [
          {
            first_name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            last_name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            locationId: location,
          },
        ],
      },
      include: [{ model: Location }, { model: SubServices }],
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
    if (!users) {
      throw customError('user does not exist', 400);
    }
    const reviews = await Promise.all(
      users.map(async (user) => {
        const reviewAvg = await Review.findAll({
          where: { userId: user.id },
          attributes: [[fn('AVG', col('reviews.rate')), 'avgRating']],
          raw: true,
          group: ['reviews.userId'],
        });
        return reviewAvg;
      }),
    );
    const usersWithReviews = users.map((user, index) => ({
      ...user.dataValues,
      avgRating: reviews[index][0].avgRating,
    }));

    res.status(200).json({ msg: 'Search result', data: usersWithReviews });
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.log(error);
      return next(customError(error.message, 400));
    }
    console.log(error);
    next(error);
  }
};

module.exports = getSearchResult;
