// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");
let quantity = document.querySelector('p').innerHTML = 'Welcome to <em>our</em> neighborhood!';
let temp = document.querySelector('C');
const copyright = document.querySelector('#copyright');

copyright.textContent = `©️${new Date().getFullYear()}`;
let quanti = document.querySelector('#q').value;
	 

// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.
let citynames = [
	"New York",
	"Sacramento",
	"Cleveland",
	"South Bend",
	"Tampa Bay",
	"Corpus Christi"
];
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
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

const divs = document.querySelectorAll('div');
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName} ${monthName} ${d.getDate()}, ${year}`;
document.querySelector("#date2").textContent = fulldate;
console.log(filterC);
let filterC = citynames.filter(city => city.charAt(0) === 'C');


