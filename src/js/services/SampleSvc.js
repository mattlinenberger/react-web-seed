import EventingService from './EventingService';
import Events from '../config/Events';

class SampleSvc extends EventingService {
  constructor() {
    super();
    console.log('Constructing SampleSvc...');

    /* init state */
    this.updateState({
      count: 0,
    });

    /* create an event */
    this.createEvent(Events.SAMPLE_SERVICE_ON_CHANGE);
  }

  incrementCount1() {
    let { count } = this.state;

    count += 1;

    /* update state */
    this.updateState({
      count,
    });

    /* fire a change event */
    this.notify(
      Events.SAMPLE_SERVICE_ON_CHANGE,
      this.state,
    );
  }

  retrieveData() {
    return this.state;
  }
}

module.exports = new SampleSvc();
