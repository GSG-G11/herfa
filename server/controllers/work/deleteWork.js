const { Work, User } = require('../../database/models');
const { customError } = require('../errors');
const { paramsValidation } = require('../../utils/validation');

const deleteWork = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const user = await User.findByPk(userId);
    const { providerID } = req;
    if (user.id !== +providerID) {
      throw customError('Unauthorized', 401);
    } else {
      const { id } = await paramsValidation.validateAsync(req.params);
      const work = await Work.findByPk(id);
      if (!work) {
        throw customError('work does not exist', 400);
      }
      await work.destroy({ where: { id } });
      res.json({ msg: 'work deleted successfully' });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    return next(error);
  }
};

module.exports = { deleteWork };
