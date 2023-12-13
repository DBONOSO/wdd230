const dayNames = ["Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday", 
  "Friday", 
  "Saturday"];
const monthNames = ["January", 
"February", 
"March", 
"April", 
"May", 
"June", 
"July", 
"August", 
"September", 
"October", 
"November", 
"December"];

const lastModifiedDate = new Date(document.lastModified);

const bannerOne = document.getElementById("banner-one");
const closeBanner = document.getElementById("banner-close");

function formatDate(date) {
  return new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(date);
}

const lastUpdatedDay = lastModifiedDate.getDay();
const lastUpdatedMonthName = monthNames[lastModifiedDate.getMonth()];
const lastUpdatedYear = lastModifiedDate.getFullYear();
const fullLastUpdatedDate = `${dayNames[lastUpdatedDay]}, ${lastUpdatedMonthName} ${lastModifiedDate.getDate()}, ${lastUpdatedYear}`;
document.getElementById("last-update-field").textContent = fullLastUpdatedDate;


const date = new Date();


const formattCurrentDate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);
document.getElementById("currentDate").textContent = formattCurrentDate;

