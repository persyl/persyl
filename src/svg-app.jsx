import React from 'react';
import Graph from './graph.jsx';

export default class SvgApp extends React.Component {
  render() {
    return (
      <Graph data={this.props.data} />
    )
  }
}