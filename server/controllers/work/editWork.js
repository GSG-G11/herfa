const { Work } = require('../../database/models');
const { customError } = require('../errors');
const { paramsValidation } = require('../../utils/validation');

const editWork = async (req, res, next) => {
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
    await work.update(req.body);
    res.json({ msg: 'work updated successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { editWork };
