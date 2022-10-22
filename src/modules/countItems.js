// Count event items in the DOM
const countItems = () => {
  const items = document.querySelectorAll('#event');
  document.querySelector('#item-count').textContent = `(${items.length}) Events`;
  return items.length;
};

export default countItems;