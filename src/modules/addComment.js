import getComments from './getComments.js';

// Add like to game using Involvement API and console.log the response
const addComment = async (id, username, comment) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AvZcLNYpo6DEiCsZuxdL/comments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  }).then(() => {
    getComments();
  });
};

export default addComment;