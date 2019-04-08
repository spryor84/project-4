import React, { Component } from 'react';

class StockNewsListItem extends Component {
  constructor() {
    super()
    this.state = {
      indiv: ''
    }
  }

  render() {
    return (
      <div className="stocknewslist">
        <div className="stocknewslistitemone">{this.props.news.datetime.substr(0,10)} </div>
        <div className="stocknewslistitemtwo">{this.props.news.datetime.substr(11,8)} </div>
        <div className="stocknewslistitemthree">{this.props.news.headline} </div>
        <div className="stocknewslistitemfour">{this.props.news.summary} </div>
        <a href={this.props.news.url}>Read More...</a>
      </div>
    );
  }
}

export default StockNewsListItem;
