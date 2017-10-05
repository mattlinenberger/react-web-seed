
class SampleSvc {
  constructor() {
    console.log('Constructing SampleSvc...');

    /* init counts */
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
  }

  incrementCount1() {
    this.count1 += 1;
  }

  retrieveData() {
    const { count1 } = this;
    const data = {
      count1,
    };

    console.log('Sending data: %O', data);
    return data;
  }
}

module.exports = new SampleSvc();
