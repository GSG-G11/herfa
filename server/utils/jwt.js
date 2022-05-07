const { verify } = require('jsonwebtoken');
const { sign } = require('jsonwebtoken');

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY, (err, match) => {
    if (err) return reject(err);
    return resolve(match);
  });
});
const signToken = (providerName, userId) => new Promise((resolve, reject) => {
  sign({ providerName, providerID: userId, role: 'provider' }, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      return reject(err);
    }
    return resolve(token);
  });
});
// module.exports = signToken;
module.exports = { verifyToken, signToken };
