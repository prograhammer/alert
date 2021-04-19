module.exports = {
  entry: './src/alert.js',
  mode: 'production',
  output: {
    library: 'alert',
    libraryTarget: 'umd',
    filename: 'alert.js',
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};