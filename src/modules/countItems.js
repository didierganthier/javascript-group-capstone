// Count event items in the DOM
const countItems = () => {
  const items = document.querySelectorAll('#event');
  return items.length;
};

export default countItems;