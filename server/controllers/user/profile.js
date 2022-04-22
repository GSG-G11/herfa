const { Work, Review } = require('../../database/models');
const paramsValidation = require('../../utils/validation/params');

const profile = async (req, res, next) => {
  try {
    const { id } = await paramsValidation.validateAsync(req.params);
    const works = await Work.findAll({
      where: {
        userId: id,
      },
    });
    const user = await works[0].getUser();
    const services = await user.getServices();
    const locations = await user.getLocation();
    const reviews = await Review.findAll({
      where: {
        userId: id,
      },
    });
    const data = {
      user,
      works,
      locations,
      reviews,
      services,
    };
    res.status(200).json({ msg: "Profile user's information", data });
  } catch (error) {
    next(error);
  }
};
module.exports = profile;
