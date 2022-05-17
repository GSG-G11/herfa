const { User } = require('../../database/models');
const { imageValidation } = require('../../utils/validation');
const { customError } = require('../errors');
const { uploadImage } = require('../../utils');

const uploadImageController = async (req, res, next) => {
  const { providerID } = req;
  try {
    const {
      id,
      profileImg,
    } = await imageValidation.validateAsync({ ...req.params, profileImg: req.body.profileImg });
    const user = await User.findByPk(id);
    if (id !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    const imgAws = await uploadImage(profileImg, id);
    await user.update(
      {
        image: imgAws.Location,
      },
      {
        where: {
          id,
        },
      },
    );
    res.json({ msg: 'image uploaded successfully', data: imgAws.Location });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { uploadImageController };
