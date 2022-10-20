/* eslint-disable camelcase */
import '../dist/output.css';
import createEventHtmlPopup from './modules/createEventHtmlPopup.js';
import init from './modules/init.js';
import './style.css';

// Initialize the app
init();
const displayComponent = (elmnts) => {
  if (elmnts.isArray) {
    elmnts.forEach((elmnt) => {
      const test = elmnt.classList;
      if (test.contains('hidden_item')) {
        test.remove('hidden_item');
      }
    });
  } else {
    const test = elmnts.classList;
    if (test.contains('hidden_item')) {
      test.remove('hidden_item');
    }
  }
};
const HideComponent = (elmntsParam) => {
  const test = elmntsParam.classList;
  if (!test.contains('hidden_item')) {
    test.toggle('hidden_item');
  }
};
const { MYCLIENTID, MYCLIENTSECRET } = process.env;
const popup = document.querySelector('.modal_popup');
const getEventById = async (id) => {
  const url = `https://api.seatgeek.com/2/events/${id}?client_id=${MYCLIENTID}&client_secret=${MYCLIENTSECRET}`;
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
const popEventUp = async (id) => {
  const retour = await getEventById(id);
  popup.innerHTML = createEventHtmlPopup(retour);
  displayComponent(popup);
};
const closePopup = () => {
  HideComponent(popup);
};
document.closePopup = closePopup;
document.popEventUp = popEventUp;
document.HideComponent = HideComponent;