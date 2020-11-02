const api = {
  key: "324dcbf7964d436cb93fd5406a264970",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    if(weather_el.innerText == "Clear") {
      weather_el.innerText = "Sereno";
    }
    else if(weather_el.innerText == "Clouds") {
      weather_el.innerText = "Nuvoloso";
    }
    else if(weather_el.innerText == "Thunderstorm") {
      weather_el.innerText = "Temporale";
    }
    else if(weather_el.innerText == "Drizzle") {
      weather_el.innerText = "Pioggerella";
    }
    else if(weather_el.innerText == "Rain") {
      weather_el.innerText = "Pioggia";
    }
    else if(weather_el.innerText == "Snow") {
      weather_el.innerText = "Neve";
    }
    else if(weather_el.innerText == "Mist") {
      weather_el.innerText = "Nebbia";
    }
    else if(weather_el.innerText == "Smoke") {
      weather_el.innerText = "Fumo";
    }
    else if(weather_el.innerText == "Haze") {
      weather_el.innerText = "Foschia";
    }
    else if(weather_el.innerText == "Dust") {
      weather_el.innerText = "Turbine di Sabbia";
    }
    else if(weather_el.innerText == "Fog") {
      weather_el.innerText = "Nebbia";
    }
    else if(weather_el.innerText == "Sand") {
      weather_el.innerText = "Sabbia";
    }
    else if(weather_el.innerText == "Ash") {
      weather_el.innerText = "Cenere";
    }
    else if(weather_el.innerText == "Squall") {
      weather_el.innerText = "Burrasca";
    }
    else if(weather_el.innerText == "Tornado") {
      weather_el.innerText = "Tornado";
    }

  let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }

  function dateBuilder (d) {
  let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
  let days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
