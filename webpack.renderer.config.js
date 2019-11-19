const rules = require('./webpack.rules');

rules.push({
  test: /\.s[ca]ss$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  },
  module: {
    rules,
  },
  plugins: require('./webpack.plugins'),
};
