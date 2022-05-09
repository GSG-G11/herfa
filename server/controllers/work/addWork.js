const { workValidation, uploadImage } = require('../../utils');
const { customError } = require('../errors');
const { Work } = require('../../database/models');

const addWork = async (request, response, next) => {
  try {
    const { providerID } = request;
    const { image } = request.files;
    const { title, content } = await workValidation.validateAsync(request.body);
    const { Location } = await uploadImage(image, providerID);
    if (!Location) throw customError('problem with uploading the image', 500);
    await Work.create({
      title,
      content,
      userId: providerID,
      image: Location,
    });
    response.json({ msg: 'Work is added successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') next(customError(error.message, 400));
    next(error);
  }
};

module.exports = addWork;
