const searchButton = document.querySelector("button[value=save]")
let cityName;
function takeFormData () {
    const form = document.getElementById("getCityName")
    const formData = new FormData(form,searchButton)
    let formValues = {}
    for (const [key, value] of formData) {
        formValues[key] = value
      }
     return formValues; 
}

function handleSearchClick () {
    cityName = takeFormData();
    return cityName;
}
function getIcon (iconName) {return `../icons/${iconName}.svg`}
function showWeather (weatherObj) {
    console.log(weatherObj)
    const showWeatherContainer = document.querySelector('.show-weather');
    const showAdress = `<h1 class="cityAddress"> ${weatherObj.address} </h1>`
    const showTemprature = `<div class="temp">${weatherObj.currentTemp}</div>`
    const showWindSpeed = `<div class="temp">${weatherObj.windspeed}</div>`
    let iconPath = getIcon(weatherObj.icon);
    const showIcon = `<img src="${iconPath}"></img>`
    const mainWeatherData = `<div class="mainWeatherData">${showAdress + showTemprature + showIcon} </div>` ;
    const extraWeatherData =  `<div class="mainWeatherData">${showWindSpeed} </div>`

    showWeatherContainer.innerHTML = mainWeatherData+extraWeatherData;
    
}
export {searchButton,handleSearchClick,showWeather} ;
