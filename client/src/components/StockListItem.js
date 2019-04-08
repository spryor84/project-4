import React, { Component } from 'react';

class StockListItem extends Component {
  constructor() {
    super()
    this.state = {
      indiv: ''
    }
  }

  render() {
    return (
      <div className="stocklist">
        <div className="stocklistitemone">{this.props.topdata.companyName} </div>
        <div className="stocklistitemtwo">{this.props.topdata.symbol} </div>
        <div className="stocklistitemthree">{this.props.topdata.latestPrice} </div>
        <div className="stocklistitemfour">{this.props.topdata.change} </div>
        <div className="stocklistitemfive">{(this.props.topdata.changePercent * 100).toString().substr(0, 6)}%</div>
      </div>
    );
  }
}

export default StockListItem;
