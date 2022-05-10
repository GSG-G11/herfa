const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { workEditValidation } = require('../../utils/validation');
const { uploadImage, deleteImage } = require('../../utils');

const editWork = async (req, res, next) => {
  try {
    const { id } = await workEditValidation.validateAsync(req.body);
    const { title, content } = req.body;
    const { providerID } = req;
    const work = await Work.findByPk(id);
    if (!work) {
      throw customError('work does not exist', 400);
    }
    if (work.userId !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    let imgUrl = '';
    if (req.files) {
      const { image } = req.files;
      imgUrl = await uploadImage(image, work.userId);
      deleteImage(work.image);
    }

    await work.update({
      title,
      content,
      image: imgUrl.Location,
    });
    res.json({ msg: 'work updated successfully', data: work });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { editWork };
