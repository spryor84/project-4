import React, { Component } from 'react';
import Chart from './Chart.js'
import StockNewsListItem from './StockNewsListItem.js'
import * as d3 from 'd3';
import * as c3 from 'c3';

class Stock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bam: 'bam',
      chartType: 'line'
    }
  }

  componentDidMount(){
        fetch(`https://api.iextrading.com/1.0/stock/aapl/news/last/3`)
        .then(response => response.json())
        .then(news => this.setState({ news })
        );
    fetch(`https://api.iextrading.com/1.0/stock/aapl/chart/1d`)
        .then(response => response.json())
        .then(oneday => this.setState({ oneday })
        );
    fetch(`https://api.iextrading.com/1.0/stock/aapl/quote`)
        .then(response => response.json())
        .then(info => this.setState({ info })
        );
    console.log('hey there')
  }

// _setLineChart(){
//   this.setState({
//     chartType: 'line'
//   });
// }

  renderNews() {
    if (this.state.news) {
      return this.state.news.map(news => {
        return (
          <div>
          <StockNewsListItem key={news.id} news={news}/>
          <br/>
          </div>
        );
      });

    } else return <p>Loading News...</p>
  }

  render() {
    return (
      <div>
      <div className="stock">
        <Chart data={this.state.oneday} chartType={this.state.chartType}/>
        <br/>
      </div>
      <div>
      {this.renderNews()}
      </div>
      </div>
    );
  }
}

export default Stock;
