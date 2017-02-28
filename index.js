import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {allReducers} from './src/redux/reducers/';

const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, {}, middleware);

//Old EcmaScript 5 syntax:
//var HelloWorld = require('./src/hello-world.jsx');

import HelloPer from './src/hello-per.jsx'; //ES2015 syntax

ReactDOM.render(
  <Provider store={store}>
  <HelloPer />
  </Provider>
  ,
  document.getElementById('example-output')
);
