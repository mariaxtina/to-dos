var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// const todoData = require("./todoData.js");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(3000, function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });

// app.get("/api/contacts", (req, res) => {
//   res.json(todoData);
// });