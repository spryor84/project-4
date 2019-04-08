import React, { Component } from 'react';
import AudioPlayer from "react-h5-audio-player";
import logo from '../logo.svg';
import song from '../money.mp3';
import Content from './Content.js';
import MarketsOne from './MarketsOne.js';
import MarketsTwo from './MarketsTwo.js';
import Currencies from './Currencies.js';


class Body extends Component {
  constructor() {
      super()
      this.state = {
        display: 'MS',
        indiv: ''
      }

      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick(e){
    let str = e.target.name
    this.setState(prevState => ({
      display: str,
      indiv: ''
    }));
  }

  render() {
    return (
      <div className="body">
        <div className="topbar">
            <button name="MS" onClick={(e) => this.handleClick(e)}>Market Summary</button>
            <button name="YS" onClick={(e) => this.handleClick(e)}>Your Stocks</button>
            <button name="LM" onClick={(e) => this.handleClick(e)}>Local Markets</button>
            <button name="WM" onClick={(e) => this.handleClick(e)}>World Markets</button>
        </div>
        <div className="content">
        <div className="left">
          <Content display= {this.state.display} indiv={this.state.indiv}/>
        </div>
        <div className="sidebar">
          <MarketsOne />
          <br/>
          <MarketsTwo />
          <br/>
          <Currencies />
        </div>
        </div>
      </div>
    );
  }
}

export default Body;
