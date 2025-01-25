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
function createExtraWeatherBox (extraWeatherObj) {
    let showWindSpeed = "";
    for (let [key, value] of Object.entries(extraWeatherObj)) {
        if(value === null) value = "empty"
       showWindSpeed += `<div class="${key}"><span class="extra-title">${key}</span><span>${value}</span></div>`
      }
      return showWindSpeed;
    //    = 
}
function handleSearchClick () {
    cityName = takeFormData();
    return cityName;
}
function getIcon (iconName) {return require (`./icons/${iconName}.svg`)}
function showWeather (weatherObj) {
    console.log(weatherObj)
    const showWeatherContainer = document.querySelector('.show-weather');
    const showAdress = `<h1 class="cityAddress"> ${weatherObj.address} </h1>`
    const showTemprature = `<div class="temp">${weatherObj.currentTemp}</div>`
    const extraWeather = createExtraWeatherBox (weatherObj.extraWeather)
    let iconPath = getIcon(weatherObj.icon);
    const showIcon = `<img class="weatherIcon" src="${iconPath}"></img>`
    const mainWeatherData = `<div class=" weatherData">
    <div class="mainWeatherData">
     <div class="icon">${showIcon}</div>
        <div> 
         <h1>${showAdress} </h1>
          <p>${showTemprature } </p>
        </div>
    </div> 
    `;
    const extraWeatherData =  `<div class="extraWeatherData weatherData">${extraWeather}</div>`
    showWeatherContainer.innerHTML = mainWeatherData+extraWeatherData;
    
}

export {searchButton,handleSearchClick,showWeather} ;
