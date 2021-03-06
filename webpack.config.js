const ngtools = require('@ngtools/webpack');

module.exports = {
  entry: {
    main: './src/main.server.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json',
    })
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      loader: '@ngtools/webpack',
    }]
  }
}
