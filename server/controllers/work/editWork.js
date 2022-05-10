const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { workEditValidation } = require('../../utils/validation');
const { uploadImage, deleteImage } = require('../../utils');

const editWork = async (req, res, next) => {
  try {
    const {
      id, title, content,
    } = await workEditValidation.validateAsync({ ...req.body, workImg: req.files.workImg });
    const { providerID } = req;
    const work = await Work.findByPk(id);
    if (!work) {
      throw customError('work does not exist', 400);
    }
    if (work.userId !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    let imgUrl = work.image;

    const { workImg } = req.files;
    if (workImg) {
      const imgAws = await uploadImage(workImg, work.userId);
      imgUrl = imgAws.Location;
    }
    await work.update({
      where: { id: work.id },
      title,
      content,
      image: imgUrl,
    });
    res.json({ msg: 'work updated successfully', data: work });

    if (workImg) {
      const key = work.image.split('https://herfa.s3.eu-west-2.amazonaws.com/')[1];
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
