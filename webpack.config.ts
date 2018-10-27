import {resolve} from 'path';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as nodeExternals from 'webpack-node-externals';
import * as ZipPlugin from 'zip-webpack-plugin';

const distFolder = resolve(__dirname, 'dist');
const config = {
  entry: resolve(__dirname, 'src', 'contracts', 'index.ts'),
  target: 'node',
  output: {
    path: distFolder,
    filename: 'index.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json', 'index.js' ]
  },
  externals: [
    nodeExternals({
      whitelist: ['x509']
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ZipPlugin({filename: 'dist.zip'}),
    new CleanWebpackPlugin([distFolder])
  ]
};

export default config;
