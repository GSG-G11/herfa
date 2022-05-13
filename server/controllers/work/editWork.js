const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { workEditValidation } = require('../../utils/validation');
const { uploadImage, deleteImage } = require('../../utils');

const editWork = async (req, res, next) => {
  try {
    const {
      id, title, content, workImg,
    } = await workEditValidation.validateAsync(req.body);
    const { providerID } = req;
    const work = await Work.findByPk(id);
    if (!work) {
      throw customError('work does not exist', 400);
    }
    const { userId, image } = work;
    if (userId !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    let imgUrl = image;

    // const { workImg } = req.files;
    if (workImg) {
      const imgAws = await uploadImage(workImg, userId);
      imgUrl = imgAws.Location;
    }
    await work.update({
      title,
      content,
      image: imgUrl,
    }, {
      where: { id },
    });
    res.json({ msg: 'work updated successfully', data: work });
    if (workImg) {
      const key = image.split('https://herfa.s3.eu-west-2.amazonaws.com/')[1];
      await deleteImage(key);
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { editWork };
