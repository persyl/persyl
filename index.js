import React from 'react';
import ReactDOM from 'react-dom';

//Old EcmaScript 5 syntax:
//var HelloWorld = require('./src/hello-world.jsx');

import HelloPer from './src/hello-per.jsx'; //ES2015 syntax



// ReactDOM.render(
//   <HelloWorld country="Sverige" />,
//   document.getElementById('example-output')
// );

ReactDOM.render(
  <HelloPer />,
  document.getElementById('example-output')
);
