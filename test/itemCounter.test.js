/**
 * @jest-environment jsdom
 */

test('should add two events to the DOM', () => {
  document.body.innerHTML = `
    <div id="events"></div>
  `;
  const events = document.querySelector('#events');
  const event = document.createElement('div');
  const event2 = document.createElement('div');
  event.id = 'event';
  event2.id = 'event';
  events.appendChild(event);
  events.appendChild(event2);
  expect(events.children.length).toBe(2);
});
