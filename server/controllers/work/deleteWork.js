const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { paramsValidation } = require('../../utils/validation');

const deleteWork = async (req, res, next) => {
  try {
    const { id } = await paramsValidation.validateAsync(req.params);
    const { providerID } = req;
    const work = await Work.findByPk(id);
    if (!work) {
      throw customError('work does not exist', 400);
    }
    if (work.userId !== +providerID) {
      throw customError('Unauthorized', 401);
    }
    await work.destroy({ where: { id } });
    res.json({ msg: 'work deleted successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { deleteWork };
