import React, { Component } from 'react';
import FaveListItem from './FaveListItem.js'
import StockListItem from './StockListItem.js'

class YS extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topdata: [],
      faves: ['BABA','PEP','AAPL'],
      favesData: []
    }
  }
  componentDidMount() {
    console.log(this.state.faves)
    fetch(`https://api.iextrading.com/1.0/stock/market/list/infocus`)
        .then(response => response.json())
        .then(topdata => this.setState({ topdata })
        );
    fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols={this.state.faves}&types=quote&range=1m&last=5`)
        .then(response => response.json())
        .then(favesData => this.setState({ favesData })
        );
    console.log(this.state.favesData)
  }

  renderFaves(){
      if(this.state.favesData) {
      return this.state.favesData.map(favesData => {
        return (
          <FaveListItem key={favesData.id} favesData={favesData}/>
        );
      });

    } else return <p>Loading Fave Stocks...</p>
  }

  renderTop() {
      if(this.state.topdata) {
      return this.state.topdata.map(topdata => {
        return (
          <StockListItem key={topdata.id} topdata={topdata}/>
        );
      });

    } else return <p>Loading Stocks...</p>
  }

  render() {
    return (
      <div>
      <div className="YS">
        Your Stocks
      </div>
      <div className="fave">
      {this.renderFaves()}
      </div>
      <div className= "title">You May Be Interested In</div>
      <div>
      {this.renderTop()}
      </div>
      </div>
    );
  }
}

export default YS;
