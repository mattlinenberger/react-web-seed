
class Throwable {
  /**
   * Constructs a new Throwable.
   * @param {String} thrower - class or fn throwing the exception.
   * @param {String} message - reason the exception was thrown.
   */
  constructor(thrower, message) {
    this.message = message;
  }
}

module.exports = Throwable;
