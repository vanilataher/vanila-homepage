const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');
const port = process.env.PORT || 8000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${port}`);
})
