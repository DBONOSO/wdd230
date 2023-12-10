const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
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
  "December",
];

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

// Format and display the last updated date
const lastUpdatedDayName = dayNames[lastModifiedDate.getDay()];
const lastUpdatedMonthName = monthNames[lastModifiedDate.getMonth()];
const lastUpdatedYear = lastModifiedDate.getFullYear();
const fullLastUpdatedDate = `${lastUpdatedDayName}, ${lastUpdatedMonthName} ${lastModifiedDate.getDate()}, ${lastUpdatedYear}`;
document.getElementById("last-update-field").textContent = fullLastUpdatedDate;

// Get the current date
const currentDate = new Date();

// Format and display the current date
const formattedCurrentDate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(currentDate);
document.getElementById("currentDate").textContent = formattedCurrentDate;

// Show banner on Mondays, Tuesdays, and Wednesdays
if (currentDate.getDay() === 1 || currentDate.getDay() === 2 || currentDate.getDay() === 3) {
  document.querySelector(".banner-one").classList.toggle(".banner-shown");

  // Close banner on click
  document.querySelector("·banner-close").addEventListener("click", function () {
    this.closest(".banner-one").classList.toggle(".banner-shown");
  });
}