import React, { Component } from 'react';

class FaveListItem extends Component {


  render() {
    return (
      <div className="stocklist">
        <div className="stocklistitemone">{this.props.favesData.companyName} </div>
        <div className="stocklistitemtwo">{this.props.favesData.symbol} </div>
        <div className="stocklistitemthree">{this.props.favesData.latestPrice} </div>
        <div className="stocklistitemfour">{this.props.favesData.change} </div>
        <div className="stocklistitemfive">{(this.props.favesData.changePercent * 100).toString().substr(0, 6)} </div>
      </div>
    );
  }
}

export default FaveListItem;
