const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={}';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function 

apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw
 
Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function
 
displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();