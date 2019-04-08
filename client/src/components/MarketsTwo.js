import React, { Component } from 'react';

class MarketsTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whatever: ''
    }
  }


  // getWMData() {
  //   let zipCode = this.state.zipcode;
  //   let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=c41d9582e5affc51fc5c1c6d7d606b0a`
  //   fetch (url)
  //     .then( res => res.json() )
  //     .then( data => {
  //     this.setState(prevState =>
  //     ({locale: data.name, temp: data.main.temp,
  //     feelingLike: data.weather[0].description})
  //     )
  //     })
  // }
  render() {
    return (
      <div className="MarketsTwo">
        <div className ="title2">World Markets</div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div className="right1">.DJI</div>
            <div className="right2">25,2820.68</div>
          </div>
          <div className="inner">
            <div className="right3">Dow Jones</div>
            <div className="right4">+282.22</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>DAX</div>
            <div>11,485.17</div>
          </div>
          <div className="inner">
            <div>Dax Index</div>
            <div>+236.77</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>SENSEX</div>
            <div>36,241.00</div>
          </div>
          <div className="inner">
            <div>BSE Sensex</div>
            <div>+46.70</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>UKX</div>
            <div>7,056.74</div>
          </div>
          <div className="inner">
            <div>FTSE 100 Index</div>
            <div>+73.52</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>IB</div>
            <div>9,193.10</div>
          </div>
          <div className="inner">
            <div>IBEX 35</div>
            <div>+119.20</div>
          </div>
        </div>
    </div>
    );
  }
}

export default MarketsTwo;
