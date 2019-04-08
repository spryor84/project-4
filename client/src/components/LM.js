import React, { Component } from 'react';

class LM extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whatever: ''
    }
  }

  render() {
    return (
      <div className="LM">
        Local Market Information
      </div>
    );
  }
}

export default LM;
