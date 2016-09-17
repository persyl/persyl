//EcmaScript 2015 syntax
import React from'react';
import data from './data';
import SvgApp from './svg-app.jsx';

export default class HelloPer extends React.Component{
	constructor(props){
		super(props);
	}

  render(){
    return (<div>
      <p>Detta kommer från React-komponenten hello-per.js!</p>
      <SvgApp data={data} />
      </div>);
  }
}