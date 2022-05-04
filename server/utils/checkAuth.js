const { customError } = require('../controllers/errors');
const verifyToken = require('../controllers/middleware');

module.exports = async (req, res, next) => {
  const { token } = await req.cookies;
  try {
    if (!token) throw customError('Unauthorized', 401);
    const verifyed = await verifyToken(token);
    req.providerID = verifyed.providerID;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') next(customError('Unauthorized', 401));
    return next(err);
  }
};
