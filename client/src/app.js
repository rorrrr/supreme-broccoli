var React = require('react');
var ReactDOM = require('react-dom');

var FilmContainer = require('./containers/FilmContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <FilmContainer />,
    document.getElementById('app')
  );
};
