import createEventHtml from './createEventHtml.js';

// Create the HTML for the events
const createEventsHtml = (events) => {
  const eventsHtml = events.map((event) => createEventHtml(event)).join('');
  return eventsHtml;
};

export default createEventsHtml;