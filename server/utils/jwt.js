const { verify } = require('jsonwebtoken');

const verifyToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY, (err, match) => {
    if (err) return reject(err);
    return resolve(match);
  });
});

module.exports = verifyToken;
