function openModal(type) {
  var el = document.getElementById('modal-container');
  el.classList.add(type);
}

function closeModal() {
  var el = document.getElementById('modal-container');
  el.className = '';
}