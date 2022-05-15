const { User } = require('../../database/models');
const { imageValidation } = require('../../utils/validation');
const { customError } = require('../errors');
const { uploadImage, deleteImage } = require('../../utils');

const uploadImageController = async (req, res, next) => {
  const { providerID } = req;
  try {
    const {
      id,
      profileImg,
    } = await imageValidation.validateAsync({ ...req.params, profileImg: req.files.profileImg });
    const user = await User.findByPk(id);
    if (user.id !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    if (!user) {
      throw customError('user does not exist', 400);
    }
    const { image } = user;
    if (image) {
      const key = image.split('https://herfa.s3.eu-west-2.amazonaws.com/')[1];
      await deleteImage(key);
    }
    const imgAws = await uploadImage(profileImg, id);
    await user.update({
      image: imgAws.Location,
    });
    res.json({ msg: 'image uploaded successfully', data: user });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { uploadImageController };
