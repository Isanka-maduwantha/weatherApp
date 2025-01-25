import { showWeather } from "./uiChanges.js";
async function callWeather(city) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=5TC9RN26MME33FYGF2WD88CPR&unitGroup=metric`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    return weatherData;
  }
function handleWeatherData(object) {
    console.log(object);
    let weatherFullToday = fullWeatherData(object.currentConditions);
    return {
      address: weatherFullToday.getAddress(object),
      currentTemp: weatherFullToday.getTemprature(),
      extraWeather: {
        'Wind speed':weatherFullToday.getWindSpeed(),
        Humidity :weatherFullToday.getHumidity(),
        Precipitation : weatherFullToday.getPrecipitation(),
        Visibility : weatherFullToday.getVisibility(),


      },
      icon: weatherFullToday.getIcon(),
    };
}
function fullWeatherData(object) {
    function getAddress(object) {
      return object.resolvedAddress;
    }
    function getTemprature(Celsius = true) {
      let temp = object.temp;
      if (!Celsius) {
        // convert to faranhite with one decimal point
        temp = Math.round((temp * 2 + 30) * 10) / 10;
        temp += " °F";
      } else {
        temp += " °C";
      }
      return temp;
    }
    function getWindSpeed() {
      return object.windspeed + " Km/h";
    }
    function getIcon() {
      return object.icon;
    }
    function getHumidity() {
      return object.humidity + " °C";
    }
    function getPrecipitation () {
      return object.precip ;
    }
    function getVisibility () {
      return object.visibility + " Km";
    }
    return {
      getAddress,
      getTemprature,
      getWindSpeed,
      getHumidity,
      getIcon,
      getPrecipitation,
      getVisibility,
    };
  }
function weatherFunctions (city) {
    
  callWeather(city).then((object) => {
        let weather = handleWeatherData(object);
        showWeather(weather);
        
      });
}
export default weatherFunctions;