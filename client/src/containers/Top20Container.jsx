var React = require('react');
var Top20List = require('../components/Top20List')

var Top20Container = React.createClass({

  getInitialState: function(){
    return {songs: []}
  },

  getSongs: function(){
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function() {
      // if( request.status !== 200) return;
        var responseData = JSON.parse(request.responseText);
        var entryList = responseData.feed.entry;
        this.setState({songs: entryList});
        console.log(responseData)
      }.bind(this);


      request.send();
    },

    componentDidMount: function() {
      console.log("hi")
      this.getSongs();
    },

    render: function () {
      return (
        <div className="Top20-container">
        <p id="title">iTunes Top 20</p>
        <Top20List songs={this.state.songs}/>
        </div>
      );
    }

  });

module.exports = Top20Container;
