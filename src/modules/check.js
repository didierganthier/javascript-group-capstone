const check = (id) => {
  const element = document.querySelector(`#like-${id}`);
  if (element) {
    console.log(element);
    element.addEventListener('click', () => {
      console.log('clicked');
    });
    return true;
  }
  console.log('not found');
  return false;
};

export default check;