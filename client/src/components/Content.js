import React, { Component } from 'react';
import MS from './MS.js';
import YS from './YS.js';
import LM from './LM.js';
import WM from './WM.js';

class Content extends Component {
  constructor() {
    super()
    this.state = {
      indiv: '',
      faves: ['BABA','PEP','AAPL'],
    }
  }

  renderContent(){
    if (this.props.display === 'MS'){
      return <MS indiv={this.props.indiv}/>
    }
    if (this.props.display === 'YS'){
      return <YS indiv={this.props.indiv}/>
    }
    if (this.props.display === 'LM'){
      return <LM indiv={this.props.indiv}/>
    }
    if (this.props.display === 'WM'){
      return <WM indiv={this.props.indiv}/>
    }
  }

  render() {
    return (
       <div>
        {this.renderContent()}
      </div>
    );
  }

}

export default Content;