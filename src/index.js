/* eslint-disable camelcase */
import '../dist/output.css';
import addComment from './modules/addComment.js';
import addLike from './modules/addLike.js';
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

const addNewComment = async (id) => {
  await addComment(id, document.querySelector('.username').value, document.querySelector('.usercomment').value);
};
document.querySelector('#events').addEventListener('DOMSubtreeModified', () => {
  document.querySelectorAll('.image').forEach((image) => {
    image.onclick = () => {
      document.querySelector('#popup').classList.remove('hidden');
      // Center the popup
      document.querySelector('#popup').style.top = `${window.scrollY + (window.innerHeight / 2) - (document.querySelector('#popup').offsetHeight / 2)}px`;
      document.querySelector('#popup').style.left = `${window.scrollX + (window.innerWidth / 2) - (document.querySelector('#popup').offsetWidth / 2)}px`;
      // Get the child of the popup div
      const popupChild = document.querySelector('#popup').children[0].children[0];
      popupChild.classList.add('w-full');
      popupChild.src = image.src;
      document.querySelector('.text-title').innerHTML = image.alt;
      // listing all the comments based on the customedid
      document.querySelector('.comment_button').addEventListener('click', () => {
        addNewComment(image.name);
      });
      // Make the rest of the page unscrollable
      document.querySelector('body').classList.add('overflow-hidden');
      // Blur the elements of the body
      document.querySelectorAll('#event').forEach((event) => {
        event.classList.add('blur');
      });
      document.querySelector('.comment_button').addEventListener('click', () => {

      });
      document.querySelector('#close').addEventListener('click', () => {
        document.querySelector('#popup').classList.add('hidden');
        document.querySelector('body').classList.remove('overflow-hidden');
        document.querySelectorAll('#event').forEach((event) => {
          event.classList.remove('blur');
        });
      });
    };
  });
});

document.addNewComment = addNewComment;
