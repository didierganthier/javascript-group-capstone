const countComments = async (id) => {
  // Get the comments from the Involvement API

  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AvZcLNYpo6DEiCsZuxdL/comments?item_id=${id}`);
  if (response.headers.get('content-type').includes('application/json')) {
    const data = await response.json();
    return data.length;
  }
  const data = await response.text();
  return data.length;
};

export default countComments;