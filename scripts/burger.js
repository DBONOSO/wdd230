function toggleMenu(){
 document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick=toggleMenu;


//adding the account 

function updateVisitCount() {
  let visitCount = parseInt(document.getElementById('visit-count').textContent);
  visitCount++;
  document.getElementById('visit-count').textContent = visitCount;
}

window.onload = function() {
  updateVisitCount();
};

function storeVisitCount() {
  let visitCount = parseInt(document.getElementById('visit-count').textContent);
  localStorage.setItem('visitCount', visitCount);
}

window.onload = function() {
  updateVisitCount();
  let storedVisitCount = localStorage.getItem('visitCount');
  if (storedVisitCount) {
    document.getElementById('visit-count').textContent = storedVisitCount;
  }
};