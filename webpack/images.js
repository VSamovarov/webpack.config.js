module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|gif|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      ],
    },
  };
};
