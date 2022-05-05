const { customError } = require('./errors/custom');
const verifyToken = require('../utils/jwt');

const checkAuth = async (req, res, next) => {
  const { token } = await req.cookies;
  try {
    if (!token) throw customError('Unauthorized', 401);
    const verified = await verifyToken(token);
    req.providerID = verified.providerID;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') next(customError('Unauthorized', 401));
    return next(err);
  }
};

module.exports = checkAuth;
