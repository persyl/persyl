# Learning some React
Just playing around and learning myself some React.
http://react-per.surge.sh

#Basic setup Webpack, Babel, React:
==================================
* Create an empty folder
* To initialize folder for npm, write:
```
    npm init
```
* Install Webpack globally, write:
```
    nmp install --save-dev webpack -g
```
* Install Babel, write:
```
    npm install --save-dev babel-cli babel-loader babel-core babel-preset-es2015
```
* Create a file in the folder called .babelrc (with the initial dot!)
* In that file, write:
```
    { 'presets': ['react', 'es2015'] }
```
* Install React, write:
```
    npm install --save react react-dom babel-preset-react
```
* Create a file called webpack.config.js and include the following in it:
```
module.exports = {
    context: __dirname + "/",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    }
};
```
* Create a file called index.js and include the following in it:
```
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('example')
);
```
* Create a file called index.html and include the following in it:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>A title</title>
  </head>
<body>
    <div id="example"></div>
    <script src="dist/bundle.js"></script>
</body>
</html>
```
* Just run the command webpack and a file called bundle.js should have been created in folder dist
* Open index.html in a webbrowser!
