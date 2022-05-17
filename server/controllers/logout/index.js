const logOut = (request, response) => {
  response.clearCookie('token');
  response.json({ msg: 'Logged Out successfully' });
};

module.exports = logOut;
