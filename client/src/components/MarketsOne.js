import React, { Component } from 'react';

class MarketsOne extends Component {
	constructor(props) {
    super(props)
    this.state = {
      whatever: ''
    }
  }


  render() {
    return (
      <div className="MarketsOne">
      <div className ="title2">US Markets</div>
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
            <div className="right1">.INX</div>
            <div className="right2">2,791.28</div>
          </div>
          <div className="inner">
            <div className="right3">SP 500</div>
            <div className="right4">+33.10</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div className="right1">.IXIC</div>
            <div className="right2">7,430.17</div>
          </div>
          <div className="inner">
            <div className="right3">NASDAQ</div>
            <div className="right4">+97.78</div>
          </div>
        </div>
        <br/>
        <div className="outer">
          <div className="inner">
            <div className="right1">.RUT</div>
            <div className="right2">1,542.38</div>
          </div>
          <div className="inner">
            <div className="right3">Russell 2000</div>
            <div className="right4">+9.66</div>
          </div>
        </div>
        <br/>
          <div className="outer">
            <div className="inner">
              <div className="right1">.NYA</div>
              <div className="right2">12,579.94</div>
            </div>
            <div className="inner">
              <div className="right3">NYSE</div>
              <div className="right4">+123.66</div>
            </div>
          </div>
      </div>
    );
  }
}

export default MarketsOne;
