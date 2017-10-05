import React from 'react';

import SampleSvc from '../services/SampleSvc';
import Events from '../config/Events';

class HasService extends React.Component {
  constructor(props) {
    super(props);
    /* init component */
    this.state = {
      serviceValue: SampleSvc.retrieveData(),
    };

    /* subscribe to SampleSvc's Change Event */
    SampleSvc
      .subscribe(
        Events.SAMPLE_SERVICE_ON_CHANGE,
        (data) => {
          console.log('SampleSvc state changed! %O', data);
          const { count } = data;

          this.setState({
            count,
          });
        },
      );
  }

  render() {
    return (
      <div>
        <h2>Has Service</h2>
        <p>Service Count: {this.state.count}</p>
        <button onClick={() => { SampleSvc.incrementCount(); }}>Increment Count</button>
      </div>
    );
  }
}

module.exports = HasService;
