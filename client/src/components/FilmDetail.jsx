var React = require('react');

var FilmDetail = function(props) {
  if(!props.film) {
    return <h4> No Film Selected. </h4>
  }
  return (
    <div>
    <h4>
    {props.film.show_title} - {props.film.release_year}
    </h4>
    <h5>
    {props.film.runtime}
    </h5>
    <img src={props.film.poster}/>
    </div>
    );
};

module.exports = FilmDetail;
