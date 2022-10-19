import createEventsHtml from './createEvents.js';

// Render the events to the DOM
const renderEvents = (events) => {
  const eventsHtml = createEventsHtml(events);
  const eventsContainer = document.getElementById('events');
  eventsContainer.innerHTML = eventsHtml;
};

export default renderEvents;