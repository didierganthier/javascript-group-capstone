const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AvZcLNYpo6DEiCsZuxdL/likes/');
  if (response.headers.get('content-type').includes('application/json')) {
    const data = await response.json();
    data.forEach((like) => {
      // Check if element exists before adding like
      const element = document.getElementById(`liked-by-${like.item_id.replace('like-', '')}`);
      if (element) {
        element.innerHTML = `Liked by ${like.likes} people`;
      } else {
        console.log('Element does not exist');
      }
    });
    return data;
  }
  const data = await response.text();
  document.querySelectorAll('.like-count').forEach((likeCount) => {
    likeCount.innerHTML = 'Be the first to like this post!';
  });
  return data;
};

export default getLikes;