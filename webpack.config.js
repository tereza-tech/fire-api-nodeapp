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

const main = [
  './src/index.ts',
  './src/components/bye.ts',
  './src/components/ciao.ts',
  './src/components/heading.ts',
  './src/api/fire.ts',
];

module.exports = {
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], 
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  mode: 'production',
  target: 'node',
  entry: {
    app: ['./src'],
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
    contentBase: path.resolve(__dirname, 'public'),
    compress: false,
    port: 3000
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