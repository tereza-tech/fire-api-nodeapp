const path = require('path');
const nodeExternals = require('webpack-node-externals');

/*module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    app: ['./dist/app.ts']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.min.js'
  },
  externals: [nodeExternals()]
};*/


module.exports = {
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], 
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
  mode: "development",
  target: 'node',
  entry: {
    app: ['./src/'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: ['localhost', '.gitpod.io']
  },
  externals: [nodeExternals()],
  mode: "development"
};

/*
module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: false,
    port: 3000
  }
};
*/