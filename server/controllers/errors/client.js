const clientError = (req, res) => {
  res.status(404).json({ msg: 'Page Not Found' });
};
module.exports = clientError;
