import fetchResource from './fetchRes.js';

// Get the events from the API
const getEvents = async () => {
  const events = await fetchResource();
  return events.events;
};

export default getEvents;