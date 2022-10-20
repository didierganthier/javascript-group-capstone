import getLikes from './getLikes.js';

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

export default addLike;