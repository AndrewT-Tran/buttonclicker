const box = document.getElementById('box');

box.addEventListener('onclick', (event) => {
  event.target.remove();
});