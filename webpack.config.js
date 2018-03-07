const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//const devserver = require('./webpack/devserver');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const babel = require('./webpack/js.babel');
const svgsprite = require('./webpack/svg.sprite');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const common = merge([
  {
    devtool: 'source-map',
    entry: {
      main: PATHS.source + '/index.js',
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js',
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'common',
      // }),
      new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery.min.js',
        jQuery: 'jquery/dist/jquery.min.js',
        'window.jQuery': 'jquery/dist/jquery.min.js',
        svg4everybody: 'svg4everybody/dist/svg4everybody.min.js',
      }),
      new FriendlyErrorsWebpackPlugin(),
      new CleanWebpackPlugin(PATHS.build),
    ],
  },
  babel(),
  images(),
  extractCSS(),
  svgsprite(PATHS),
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, uglifyJS()]);
    //return merge([common]);
  }
  if (env === 'development') {
    return merge([common, devserver()]);
  }
};
