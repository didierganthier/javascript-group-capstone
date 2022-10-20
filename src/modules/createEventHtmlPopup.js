/* eslint-disable camelcase */
// Create the HTML for the event
const createEventHtmlPopup = (event) => {
  let performersList = '';
  event.performers.forEach((performer) => {
    performersList += `${performer.name} - `;
  });
  const address = `${event.venue.address}, ${event.venue.city} - ${event.venue.country}`;
  const eventHtml = `<div class="modal_container"><div class="modal_close_button" onclick="closePopup()"><img src="assets/closeicon.png" alt="close icon" > </div><div class="modal_image"><img src="${event.performers[0].image
  }" alt="event image" ></div><h2 class="modal_title">${event.title
  }</h2> <ul class="modal_popup_details"><li class="detail_element"><span class="event_detail"> Location :</span> ${address
  }</li><li class="detail_element"><span class="event_detail"> Date: </span> ${event.datetime_local
  }</li><li class="detail_element"><span class="event_detail">Type :</span>${event.type
  }</li><li class="detail_element"><span class="event_detail"> Performers :</span> ${performersList
  }</li></ul></div>`;
  return eventHtml;
};

export default createEventHtmlPopup;