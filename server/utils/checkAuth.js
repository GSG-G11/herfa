const { customError } = require('../controllers/errors');
const verifyToken = require('./jwt/verifyToken');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) throw customError('Unauthorized', 401);
    verifyToken(token)
      .then(({ providerID }) => {
        req.providerID = providerID;
        next();
      })
      .catch(() => { next(customError('Unauthorized', 401)); });
  } catch (err) {
    next(err);
  }
};
