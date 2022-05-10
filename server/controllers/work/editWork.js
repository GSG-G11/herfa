const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { workEditValidation } = require('../../utils/validation');
const { uploadImage, deleteImage } = require('../../utils');

const editWork = async (req, res, next) => {
  try {
    const {
      id, title, content, image,
    } = await workEditValidation.validateAsync(req.body);
    const { providerID } = req;
    const work = await Work.findByPk(id);
    if (!work) {
      throw customError('work does not exist', 400);
    }
    if (work.userId !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    let imgUrl = image;
    const imgArr = image.split('/').pop();
    const key = `${work.userId}/${imgArr}.png`;

    const { imageAws } = req.files;
    if (imageAws) {
      const imgAws = await uploadImage(imageAws, work.userId);
      imgUrl = imgAws.Location;
      // console.log();
      deleteImage(key);
    }

    await work.update({
      title,
      content,
      image: imgUrl,
    });
    res.json({ msg: 'work updated successfully', data: work });
  } catch (error) {
    console.log(error);
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { editWork };
