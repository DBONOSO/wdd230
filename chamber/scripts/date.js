let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
let months = [
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
	"December"
];


let d = new Date(document.lastModified);
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + " " + year;
document.getElementById("last-update-field").textContent = fulldate;

let k = new Date();
let fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	k
);
document.getElementById("currentDate").textContent = fullDate;


if (k.getDay() == 1 || k.getDay() == 2){
  document.querySelector(".banner-one").classList.toggle("banner-shown");

  document.querySelector(".banner-close").addEventListener('click', function() {
  this.closest(".banner-one").style.display = "none";
});
};