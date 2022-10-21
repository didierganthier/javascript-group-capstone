/* eslint-disable camelcase */
import '../dist/output.css';
import addComment from './modules/addComment.js';
import addLike from './modules/addLike.js';
import getComments from './modules/getComments';
import init from './modules/init.js';
// Initialize the app
init();
document.querySelector('#events').addEventListener('DOMSubtreeModified', () => {
  const svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    // If svg class contains like
    if (svg.classList.contains('like')) {
      svg.onclick = () => {
        addLike(svg.id);
      };
    }
  });
});
document.querySelector('body').addEventListener('DOMSubtreeModified', () => {
  document.querySelectorAll('.image').forEach((image) => {
    image.onclick = () => {
      document.querySelector('#popup').classList.remove('hidden');
      document.querySelector('#popup').classList.add('flex');
      document.querySelector('#popup').classList.add('justify-center');
      const elementId = image.parentElement.parentElement.children[0].children[0].src.replace('https://avatars.dicebear.com/api/adventurer/', 'like-').replace('.svg', '');
      document.querySelector('#popup-item-id').innerHTML = elementId;
      document.querySelector('#popup-item-id').classList.add('text-white', 'mb-4', 'text-2xl');
      document.querySelector('ul[class="comments"]').id = `comments-${elementId}`;
      getComments(elementId);
      // Get the child of the popup div
      const popupChild = document.querySelector('#popup').children[0].children[0];
      popupChild.classList.add('w-full');
      popupChild.src = image.src;
      document.querySelector('.text-title').innerHTML = image.alt;
      // Make the rest of the page unscrollable
      document.querySelector('body').classList.add('overflow-hidden');
      // Blur the elements of the body
      document.querySelectorAll('#event').forEach((event) => {
        event.classList.add('blur');
      });
      document.querySelector('#close').addEventListener('click', () => {
        document.querySelector('#popup').classList.add('hidden');
        document.querySelector('body').classList.remove('overflow-hidden');
        document.querySelectorAll('#event').forEach((event) => {
          event.classList.remove('blur');
        });
      });

      document.querySelector('button[type="submit"]').addEventListener('click', () => {
        const username = document.querySelector('#username').value;
        const comment = document.querySelector('#comment').value;
        const item_id = document.querySelector('#popup-item-id').innerHTML;
        addComment(username, comment, item_id).then(() => {
          document.querySelector('#username').value = '';
          document.querySelector('#comment').value = '';
          getComments(item_id);
        });
      });
    };
  });
});