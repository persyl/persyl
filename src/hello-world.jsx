//Old EcmaScript 5 syntax
var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (<div>
      <h1>Hej {this.props.country}</h1>
      <p>Denna utskrift kommer från en React-komponent i hello-world.js med gammal ES5-syntax!</p>
      </div>);
  }
});
