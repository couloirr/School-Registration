const express = require('express');
const path = require('path'); // NEW
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
// app.use('/assets', express.static(path.join(__dirname, '../src/assets')));
// app.get('*', (req, res) => {
//   return res.status(200).sendFile(HTML_FILE);
// });
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
