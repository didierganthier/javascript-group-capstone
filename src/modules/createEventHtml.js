import getLikes from './getLikes.js';

const createEventHtml = (event) => {
  const {
    title, type, venue, id,
  } = event;
  const eventHtml = `
  <div id="event" class="w-full max-w-sm bg-white rounded-xl shadow-2xl m-10 bg-opacity-25 backdrop-filter backdrop-blur-lg">
      <div class="flex">
         <img class="h-10 w-10 rounded-full bg-white ml-2 mt-5" src=${`https://avatars.dicebear.com/api/adventurer/${id}.svg`} alt="Profile">
         <div class="mt-2">
              <h1 class="text-base font-bold text-white ml-2 mt-2">${title.length > 30 ? `${title.substring(0, 30)}...` : title}</h1>
              <h2 class="text-sm font-bold text-white ml-2 mt-2">${venue.city}</h2>
          </div>
      </div>
      ${
  event.performers[0].image
    ? `
      <div class="image-event">
        <img class="w-full cursor-pointer my-8 image" src="${event.performers[0].image}" alt="${event.performers[0].name}" class="event__image">
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
      <div class="flex">
         <svg aria-label="Like" id="like-${id}" class="ml-4 relative like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
         <svg aria-label="Comment" id="comment-${id}" class="ml-4 relative comment" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
      </div>
      <div class="ml-4 my-2">
          <p id="liked-by-${id}" class="like-count">Be the first to like this</p>
          <p>This is some dummy text, don't mind it</p>
          <p class="text-blue-300">#${type}</p>
      </div>
      <div class="w-full border-t border-[#111827] flex p-5 rounded-b-xl">
          <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
          <input type="text" class="w-full bg-transparent text-white ml-5" placeholder="Add a comment...">
      </div>
  </div>
  
      `;
  getLikes();
  return eventHtml;
};
export default createEventHtml;