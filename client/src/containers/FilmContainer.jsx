var React = require('react');
var FilmSelector = require('../components/FilmSelector');
var FilmDetail = require('../components/FilmDetail');

var FilmContainer = React.createClass({

  componentDidMount: function() {
    var url = 'http://netflixroulette.net/api/api.php?actor=Will%20Smith';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function() {
      if( request.status !== 200) return;
        var data = JSON.parse(request.responseText);
        this.setState({films: data, focusFilm: data[0]});
      }.bind(this);


      request.send();
    },

    getInitialState: function () {
      return { films : [], focusFilm: null};
    },

    render: function () {
      return (
        <div id="MainDiv">
        <h2>The Works of Will Smith</h2>
        <FilmSelector films={this.state.films} didSelectFilm={this.didSelectFilm} />
        <FilmDetail film={this.state.focusFilm} />
        </div>
        );
    },

    didSelectFilm: function(film) {
      this.setState({ focusFilm: film});
    }


  });

module.exports = FilmContainer;
