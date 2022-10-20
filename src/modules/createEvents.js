import createEventHtml from './createEventHtml.js';

// Create the HTML for the events
const createEventsHtml = (events) => {
  const eventsHtml = events.map((event) => createEventHtml(event)).join('');
  const likeButtons = document.querySelectorAll('.like');
  if (likeButtons) {
    likeButtons.forEach((likeButton) => {
      likeButton.addEventListener('click', () => {
        console.log(likeButton.id);
      });
    });
  } else {
    console.log('No like buttons found');
  }
  return eventsHtml;
};

export default createEventsHtml;