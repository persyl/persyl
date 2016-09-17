import React from 'react';
import Axis from './axis.jsx';
import DoubleRect from './double-rect.jsx';
// import GraphBody from './graph_body';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  //width={this.props.width} height={this.props.height}
  render() {
    return (
      <svg viewBox={"0 0 " + this.props.width + "  " + this.props.height}>
        <Axis x="10" y="100" length="100" horizontal={true} />
        <Axis x="10" y="0" length="200" horizontal={false} />
        <DoubleRect />
      </svg>
    )
  }
}
Graph.defaultProps = { width: 200, height: 200 };

export default Graph;