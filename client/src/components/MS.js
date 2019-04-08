import React, { Component } from 'react';
import Stock from './Stock.js'
import StockListItem from './StockListItem.js'
import NewsListItem from './NewsListItem.js'

class MS extends Component {
  constructor() {
    super()
    this.state = {
      indiv: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props.indiv)
    fetch(`https://api.iextrading.com/1.0/stock/market/list/infocus`)
        .then(response => response.json())
        .then(topdata => this.setState({ topdata })
        );
    fetch(`https://api.iextrading.com/1.0/stock/market/news/last/8`)
        .then(response => response.json())
        .then(news => this.setState({ news })
        );
  }

  renderTop() {
    let x = this.state.indiv
    console.log(x.length)
    if(x.length > 0) {
      return (
        <Stock symbol={this.state.indiv}/>
        )
    }

    if (this.state.topdata) {
      return this.state.topdata.map(topdata => {
        return (
          <div>
          <div>
          <StockListItem key={topdata.id} topdata={topdata}/>
          </div>
          </div>
        );
      });

    } else return <p>Loading Stocks2...</p>
  }

  renderNews() {
    if (this.state.news) {
      return this.state.news.map(news => {
        return (
          <div>
          <NewsListItem key={news.id} news={news}/>
          <br/>
          </div>
        );
      });

    } else return <p>Loading News...</p>
  }

  handleClick(e){
      // console.log(this.state.indiv, "original")
      let strtwo = e.target.textContent
      console.log(strtwo)
      this.setState(prevState => ({
        indiv: strtwo
      }));
      // console.log(this.state.indiv)
    }

  render() {
    return (
      <div className="MS">
        <div className= "title">You May Be Interested In</div>
          <br/>
          <div onClick={(e) => this.handleClick(e)}>
            {this.renderTop()}
          </div>
        <div>
          <br/>
          <div className ="title">Top Stories</div>
          {this.renderNews()}
        </div>
      </div>
    );
  }
}

export default MS;

