const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = function(PATHS) {
  return {
    plugins: [
      new SVGSpritemapPlugin({
        src: PATHS.source + '/svg/*.svg',
        filename: 'icons.svg',
        prefix: 'icon-',
        deleteChunk: false,
        svgo: { removeTitle: true },
      }),
    ],
  };
};
