import React from 'react';

import SampleSvc from '../services/SampleSvc';

class HasService extends React.Component {
  constructor(props) {
    super(props);
    /* init component */
    this.state = {
      serviceValue: SampleSvc.retrieveData(),
    };
  }

  incrementCount1() {
    console.log('Incrementing Count 1...');
    SampleSvc.incrementCount1();
    this.setState({
      serviceValue: SampleSvc.retrieveData(),
    });
  }

  render() {
    return (
      <div>
        <h2>Has Service</h2>
        <p>Service Count: {this.state.serviceValue.count1}</p>
        <button onClick={(e) => { this.incrementCount1(e); }}>Increment Count</button>
      </div>
    );
  }
}

module.exports = HasService;
