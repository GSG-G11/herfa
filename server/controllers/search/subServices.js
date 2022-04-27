const { MainServices, SubServices } = require('../../database/models');
const { mainServiceIdValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const subServices = async (request, response, next) => {
  try {
    const { mainServiceId } = request.params;
    const { id } = await mainServiceIdValidation.validateAsync({ id: mainServiceId });
    const service = await MainServices.findByPk(id);
    if (!service) throw customError('This Main Service does not exist', 404);
    const subServicesData = await SubServices.findAll({
      where: { mainServiceId: id },
      attributes: ['id', 'name'],
    });
    response.json({ msg: `Sub Services for the main service ${id}`, data: subServicesData });
  } catch (error) {
    if (error.name === 'ValidationError') next(customError(error.message, 403));
    return next(error);
  }
};

module.exports = subServices;
