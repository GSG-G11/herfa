const { sign } = require('jsonwebtoken');

module.exports = (userId) => new Promise((resolve, reject) => {
  sign({ providerID: userId, role: 'provider' }, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      return reject(err);
    }
    return resolve(token);
  });
});
