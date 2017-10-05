import StatefulService from './StatefulService';
import Throwable from '../throwables/Throwable';

const EVENT_SERVICE = 'EventingService';

/**
 * A Service that is capable of creating subscribable events
 */
class EventingService extends StatefulService {
  constructor() {
    super();
    /* init a map for storing our events */
    this.eventsMap = new Map();
  }

  /**
   * Creates an event to service's events map.
   * @param {String} eventName - name of the event to add.
   */
  createEvent(eventName) {
    /* add the event to the map and init an array for callbacks */
    this.eventsMap.set(eventName, []);
  }

  /**
   * Convenience method that will throw if an event does not exist.
   * @param {String} eventName - name of the event.
   */
  isEventOrThrow(eventName) {
    if (!this.eventsMap.has(eventName)) {
      throw new Throwable(
        EVENT_SERVICE,
        `subscribe failed: [${eventName}] does not exist`,
      );
    }
  }

  /**
   * Subscribes to an event by event name. Throws if the event is not found.
   * @param {String} eventName - name of the event to subscribe to.
   * @param {Function} callback - function to execute on event.
   */
  subscribe(eventName, callback) {
    /* check if the event exists */
    this.isEventOrThrow(eventName);

    /* if the event exists, add the call back to the subscribers array */
    this.eventsMap
      .get(eventName)
      .push(callback);
  }

  /**
   * Excecutes subscriber callback for the specified event. Throws if the event is not found.
   * @param {String} eventName - namd of the event to fire.
   */
  notify(eventName, data) {
    /* check if the event exists */
    this.isEventOrThrow(eventName);

    this.eventsMap
      .get(eventName)
      .forEach((subscriberCallback) => {
        /* call the subscriber callback with data */
        subscriberCallback(data);
      });
  }
}

module.exports = EventingService;
