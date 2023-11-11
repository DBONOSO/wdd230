function windChill(tempF, speed) {
   if (tempF<=50 && speed >=3) {
      var windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16));
      return windChill.toFixed(2) + "F";
   } else {
    return "It doesn't work"
   }
}

var temperature = parseFloat(prompt("Enter the air temperature in Fahrenheits:"));
var windSpeed = parseFloat(prompt("Enter the wind speed in miles per hour;"));

document.getElementById("chilling").innerHTML = windChill (temperature,windSpeed);
document.getElementById("speeding").innerHTML = temperature;