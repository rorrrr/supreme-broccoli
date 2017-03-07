var React = require('react');
var Top20Detail = require('./Top20Detail')

var Top20List = React.createClass({
  render: function(){

    var songNodes = this.props.songs.map(function(song, index){
      return <Top20Detail key={index} position={index + 1} song={song} />
    });

    return (
      <div className="Top20-list">
      {songNodes}
      </div>
      );
  },
});

module.exports = Top20List;
