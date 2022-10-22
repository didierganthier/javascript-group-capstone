const getComments = async (id) => {
  // Get the comments from the Involvement API
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8mPEZdLFdk3EfdzA77h/comments?item_id=${id}`);
  if (response.headers.get('content-type').includes('application/json')) {
    const data = await response.json();
    // Check if element exists before adding comments
    const element = document.getElementById(`comments-${id}`);
    if (element) {
      element.innerHTML = '';
      data.forEach((comment) => {
        element.innerHTML += `
        <div class="flex flex-col bg-white my-2 rounded justify-between">
        <p> ${comment.username} ${comment.comment} ${comment.creation_date}</p>
        </div>
        `;
      });
    }
    return data;
  }
  const data = await response.text();
  return data;
};

export default getComments;