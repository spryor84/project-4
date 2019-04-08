import React, { Component } from 'react';

class WM extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whatever: ''
    }
  }

  render() {
    return (
      <div className="WM">
        World Market Information
      </div>
    );
  }
}

export default WM;
