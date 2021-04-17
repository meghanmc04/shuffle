const path = require("path");
const webpack = require("webpack");

module.exports = {
  //tells webpack where to start bundling our files
  entry: "./src/index.js",
  //tells webpack we're working in dev mode; saves us from having to add nmode flag when we run the dev server
  mode: "development",
  //module obj defines how exported js modules are transformed + which ones are included according to given array of rules:
  module: {
    rules: [
      //first rule is about transofmring ES6 + JSX syntax
      {
        //test all these files:
        test: /\.(js|jsx)$/,
        //exclude these files:
        exclude: /(node_modules|bower_components)/,
        //since we're transforming our .js + .jsx files, we'll need to tell Webpack to use Babel
        //here, 'loader' is shorthand for the 'use' property (see next rule) when only 1 loader is being utilized
        loader: "babel-loader",
        //use the env Babel preset
        options: { presets: ["@babel/env"] }
      },
      //next rule: processing CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  //allows us to specify which extensions Webpack will resolve -> lets us import modules without needing their extensions
  resolve: { extensions: ["*", ".js", ".jsx"] },
  //tells webpack where to put our bundled code
  output: {
    path: path.resolve(__dirname, "dist/"),
    //publicPath specifies what directory the bundle should go in, and where to serve files from
    //is special property that helps us with our dev server
    //specifies the public URL of the directory (as far as webpack-dev-server will know or care)
    //if set incorrectly, will get 404s because server wont be serving files from the correct location
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    //location we're serving static files from (like our index.html)
    contentBase: path.join(__dirname, "public/"),
    //port we want to run our server on
    port: 3000,
    //tells the server where our bundled code actually is
    publicPath: "http://localhost:3000/dist/",
    //hot module replacement
    hotOnly: true
  },
  //hot module replacement: instantiate a new instance of the plugin + set hotOnly to true in devServer^^
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
