/* eslint-disable camelcase */
import '../dist/output.css';
import addLike from './modules/addLike';
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

// Check if post exist before adding event listener to like button
const check = () => {
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
};