import React, { Component } from 'react';
import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bam: 'bam',
      chartType: 'line'
    }
  }
  componentDidMount(){
    console.log('hey there chart')
  }

  // chartRender() {
  //   let chart = c3.generate({
  //   data: {
  //       data: [
  //           ['data1', 30, 200, 100, 400, 150, 250],
  //           ['data2', 50, 20, 10, 40, 15, 25]
  //       ]
  //   }
  //   return chart
  // });

  render() {
    return (
      <div className="chart">
        Chart To Go:
        <div>
        <img src='https://res.cloudinary.com/duuqzvlvn/image/upload/v1543867295/Screen_Shot_2018-12-03_at_3.01.21_PM.png' />
      </div>
      </div>
    );
  }
}

export default Chart;
