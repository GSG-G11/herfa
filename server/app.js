const { join } = require('path');
require('env2')('.env');
const express = require('express');

const compression = require('compression');
const router = require('./routes/index');

const app = express();
app.set('port', process.env.PORT || 3030);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// eslint-disable-next-line no-constant-condition, no-cond-assign
if (process.env.NODE_ENV = 'development') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  app.use(require('morgan')('dev'));
}
app.use('/api/v1', router);
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;