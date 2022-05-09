const { join } = require('path');
require('env2')('.env');
const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const compression = require('compression');
const { parse } = require('express-form-data');

const router = require('./routes/index');
const { serverError, clientError } = require('./controllers/errors');

const { NODE_ENV, PORT } = process.env;
const app = express();
app.set('port', PORT || 3030);

app.use(parse());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
// eslint-disable-next-line no-constant-condition, no-cond-assign
if (NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  app.use(require('morgan')('dev'));
}
app.use('/api/v1', router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.use(clientError);
app.use(serverError);

module.exports = app;
