/* eslint-disable camelcase */
import '../dist/output.css';
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
