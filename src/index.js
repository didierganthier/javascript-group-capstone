import '../dist/output.css';

// Get .env variables from webpack
const { MYCLIENTID, MYCLIENTSECRET } = process.env;

// fetch the resource with CORS disabled.
const fetchResource = async () => {
  const response = await fetch('https://api.seatgeek.com/2/events?client_id=Mjk4MTE1NzZ8MTY2NjE5MTA2My4yNTczMTA5&client_secret=90af2da98968e8fde3a13cd3b3969404f99436159a8a13252eb41bfafe14e716', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

// Get the events from the API
const getEvents = async () => {
  const events = await fetchResource();
  console.log(events.events);
  return events.events;
};

// Create the HTML for the event
const createEventHtml = (event) => {
  const { title, type, venue } = event;
  const eventHtml = `
<div class="w-full max-w-sm bg-white rounded-lg shadow-2xl m-10 bg-opacity-25 backdrop-filter backdrop-blur-lg">
    <div class="flex justify-between pt-10">
       <p class="ml-8 p-1 rounded bg-blue-400">${type}</p>
       <p class="pr-8">${venue.display_location}</p>
   </div>
    ${
  event.performers[0].image
    ? `
    <div class="rounded">
      <img class="p-8 rounded-t-lg" src="${event.performers[0].image}" alt="${event.performers[0].name}" class="event__image">
    </div>
    `
    : `
        <div role="status" class="p-4 max-w-sm rounded shadow animate-pulse md:p-6">
            <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded">
                <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg>
            </div>
        </div>
        `
}
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">${title}</h5>
    </a>
</div>
</div>

    `;
  return eventHtml;
};

// Create the HTML for the events
const createEventsHtml = (events) => {
  const eventsHtml = events.map((event) => createEventHtml(event)).join('');
  return eventsHtml;
};

// Render the events to the DOM
const renderEvents = (events) => {
  const eventsHtml = createEventsHtml(events);
  const eventsContainer = document.getElementById('events');
  eventsContainer.innerHTML = eventsHtml;
};

// Get the events and render them to the DOM
const init = async () => {
  const events = await getEvents();
  renderEvents(events);
};

// Initialize the app
init();