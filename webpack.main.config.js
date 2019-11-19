/**
 * @type {webpack.Configuration}
 */
module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.ts',
  // Put your normal webpack config below here
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: require('./webpack.plugins'),
};
