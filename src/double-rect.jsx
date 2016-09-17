import React from 'react';

export default class DoubleRect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <g>
        <rect class="rect01" width="60" height="60" x="0" y="0" fill="rgb(255,100,99)" stroke="black" stroke-width="3"></rect>
        <rect class="rect02" width="50" height="50" x="30" y="30" fill="rgba(0,255,0,0.3)"></rect>
      </g>
    )
  }
}