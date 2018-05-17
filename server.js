const path = require('path');
const express = require('express');
var compression = require('compression');

const port = process.env.PORT || 8000;
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');

const app = express();
app.use(compression());
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.png')));

// const webpack = require('webpack');
// const config = require('./webpack.config');
// const compiler = webpack(config);
// app.use(
//   require('webpack-dev-middleware')(compiler, {
//     publicPath: config.output.publicPath
//   })
// );
// app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public', { maxAge: '1y' }));
app.use(express.static('static', { maxAge: '1y' }));
app.use('/static', express.static('static', { maxAge: '1y' }));
app.get('*', (req, res) => {
  if (!res.getHeader('Cache-Control') || !res.getHeader('Expires')) {
    res.setHeader('Cache-Control', 'public, max-age=345600'); // ex. 4 days in seconds.
    res.setHeader('Expires', new Date(Date.now() + 345600000).toUTCString()); // in ms.
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${port}`);
});
