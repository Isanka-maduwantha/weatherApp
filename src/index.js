import './icons/partly-cloudy-day.svg'
import weatherFunctions from "./weatherData.js";
import { handleSearchClick,searchButton } from "./uiChanges.js";
// styles
import "./style.css";
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userLocation = handleSearchClick();
  console.log(userLocation)
  weatherFunctions (userLocation.city);

}) 


