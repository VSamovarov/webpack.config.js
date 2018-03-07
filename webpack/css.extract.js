const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader', // Run post css actions
                options: {
                  plugins: [
                    autoprefixer({
                      browsers: ['ie >= 8', 'last 4 version'],
                    }),
                    mqpacker({
                      sort: true,
                    }),
                  ],
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
      ],
    },
    plugins: [new ExtractTextPlugin('./css/[name].css')],
  };
};
