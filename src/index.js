/* eslint-disable camelcase */
import '../dist/output.css';
import getLikes from './modules/getLikes.js';
import init from './modules/init.js';

// Initialize the app
init();

// create app using Involvement API and console.log the response
// const createApp = async () => {
//   const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'My App',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const data = await response.text();
//   console.log(data);
// };

// createApp();

// l1xzt8yaktrcb6minzZP

// Add like to game using Involvement API and console.log the response
const addLike = async (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AvZcLNYpo6DEiCsZuxdL/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then(() => {
    getLikes();
  });
};

document.querySelector('#events').addEventListener('DOMSubtreeModified', () => {
  document.querySelectorAll('svg').forEach((svg) => {
    if (svg.id.includes('like')) {
      svg.addEventListener('click', (e) => {
        addLike(e.target.id);
        e.target.style = 'fill: #f00';
      });
    }
  });
});

getLikes();