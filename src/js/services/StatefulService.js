
class StatefulService {
  constructor() {
    this.state = {};
  }

  getState() {
    return this.state;
  }

  updateState(data) {
    /* merge the old state with the new state */
    this.state =
      Object.assign(
        {},
        this.state,
        data,
      );
  }
}

module.exports = StatefulService;
