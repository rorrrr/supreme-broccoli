var React = require('react');

var Top20Detail = function(props){
  return (
    <div className="song">
    <p>{props.position} - </p>
    <img src={(props.song['im:image'][0]['label'])}/>
    <p>{(props.song['im:name']['label'])}</p>
    <p> - by </p>
    <p>{(props.song['im:artist']['label'])}</p>
    </div>
    );
};

module.exports = Top20Detail;
