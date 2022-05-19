const { workValidation, uploadImage } = require('../../utils');
const { customError } = require('../errors');
const { Work } = require('../../database/models');

const addWork = async (request, response, next) => {
  try {
    const {
      title, content, id, image,
    } = await workValidation.validateAsync({
      ...request.body, id: request.providerID,
    });
    const { Location } = await uploadImage(image, id);
    console.log(Location);
    if (!Location) throw customError('problem with uploading the image', 500);
    const data = await Work.create({
      title,
      content,
      userId: id,
      image: Location,
    });
    response.status(201).json({ msg: 'Work is added successfully', data });
  } catch (error) {
    if (error.name === 'ValidationError') next(customError(error.message, 400));
    next(error);
  }
};

module.exports = addWork;
