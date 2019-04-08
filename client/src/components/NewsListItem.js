import React, { Component } from 'react';

class NewsListItem extends Component {
  constructor() {
    super()
    this.state = {
      indiv: ''
    }
  }

  render() {
    return (
      <div className="newslist">
        <div className="newslistitemone">{this.props.news.datetime.substr(0,10)} </div>
        <div className="newslistitemtwo">{this.props.news.datetime.substr(11,8)} </div>
        <div className="newslistitemthree">{this.props.news.headline} </div>
        <div className="newslistitemfour">{this.props.news.summary} </div>
        <a href={this.props.news.url}>Read More...</a>
      </div>
    );
  }
}

export default NewsListItem;
