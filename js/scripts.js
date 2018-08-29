function openModal(type) {
  var el = document.getElementById('modal-container');
  el.classList.add(type);
}

function closeModal() {
  var el = document.getElementById('modal-container');
  el.className = '';
}

window.addEventListener('scroll', function(e) {
  applyAnimations();
});

window.addEventListener('resize', function(e) {
  applyAnimations();
});

window.onload = function() {
  applyAnimations();
}

function applyAnimations() {
  console.log('aniamtin')
  var scrollY = window.scrollY + 50;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var panelT = document.getElementById('panel-t');
  var panel0 = document.getElementById('panel-0');
  var panel1 = document.getElementById('panel-1');
  var panel2 = document.getElementById('panel-2');

  var panelTHeight = panelT.offsetHeight;
  var panel0Height = panel0.offsetHeight;
  var panel1Height = panel1.offsetHeight;
  var panel2Height = panel2.offsetHeight;

  if (this.scrolling) { return; }

  if ((window.innerHeight + scrollY) >= document.body.offsetHeight) {
    panel1.classList.remove('animate');
  } else if (scrollY >= panelTHeight + panel0) {
    panel1.classList.add('animate');
  } else {
    panel1.classList.add('animate');
    // panel1.classList.remove('animate');
  }
}