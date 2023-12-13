const currentDate = new Date().getDay();
const formattedCurrentDate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(currentDate);

textContent = formattedCurrentDate;

if (currentDate === 1 || currentDate === 2 || currentDate === 3) {
  bannerOne.style.display = "block";
}

document.body.addEventListener("click", (event) => {
  if (event.target === closeBanner || event.target.parentNode === closeBanner) {
    bannerOne.style.display = "none";
  }
});