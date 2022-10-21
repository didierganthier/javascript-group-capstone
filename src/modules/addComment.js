/* eslint-disable camelcase */
const addComment = async (username, comment, item_id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AvZcLNYpo6DEiCsZuxdL/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      comment,
      item_id,
    }),
  });
  if (response.headers.get('Content-Type') === 'application/json') {
    return response.json();
  }
  return response.text();
};

export default addComment;