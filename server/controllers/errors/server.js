// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    msg: err.status ? err.message : 'Internal Server Error',
    status: err.status || 500,
    err,
  });
};
module.exports = serverError;
