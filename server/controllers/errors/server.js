// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    res.status(400).json({
      status: 400,
      msg: err.message,
    });
  } else if (err.name === 'NotFoundError') {
    res.status(404).json({
      status: 404,
      msg: err.message,
    });
  } else {
    res.status(err.status || 500).json({
      msg: err.status ? err.message : 'Internal Server Error',
      status: err.status || 500,
    });
  }
};
module.exports = serverError;
