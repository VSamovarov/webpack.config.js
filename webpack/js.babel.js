module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /(node_modules)/,
          //exclude: /node_modules(?!\/foundation-sites|flickity)/,
          //exclude: /node_modules\/svg4everybody/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                sourceMap: true,
                presets: ['env'],
              },
            },
          ],
        },
      ],
    },
  };
};
