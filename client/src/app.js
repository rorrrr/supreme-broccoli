var React = require('react');
var ReactDOM = require('react-dom');

var Top20Container = require('./containers/Top20Container.jsx');

window.onload = function () {
  ReactDOM.render(
    <Top20Container />,
    document.getElementById('app')
  );
};
