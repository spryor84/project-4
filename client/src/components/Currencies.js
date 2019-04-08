import React, { Component } from 'react';

class Currencies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whatever: ''
    }
  }


  // getCurData() {
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
      <div className="Currencies">
        <div className ="title2">Currencies</div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>EUR / USD</div>
            <div>1.14</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>+0.0017</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>USD / JPY</div>
            <div>113.56</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>-0.21</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>GBP / USD</div>
            <div>1.27</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>-0.00050</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>USD / CAD</div>
            <div>1.32</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>-0.0073</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>USD / HKD</div>
            <div>7.82</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>-0.0069</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>USD / CNY</div>
            <div>6.88</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>-0.076</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div>AUD / USD</div>
            <div>0.74</div>
          </div>
          <div className="inner">
            <div>4:06 PM UTC</div>
            <div>-0.00083</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Currencies;
