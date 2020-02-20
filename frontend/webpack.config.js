var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'frontapp': "./src/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../vendor/javascript/')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader", options: {
              modules: true,
              localIdentName: !!process.env.IS_PRODUCTION ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  plugins: !!process.env.IS_PRODUCTION ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true }
    })
  ] : []
};