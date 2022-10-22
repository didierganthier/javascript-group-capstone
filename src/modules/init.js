import getEvents from './getEvents.js';
import renderEvents from './renderEvents.js';

// Get the events and render them to the DOM
const init = async () => {
  const events = await getEvents();
  renderEvents(events);
};

export default init;