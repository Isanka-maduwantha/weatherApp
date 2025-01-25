import './icons/partly-cloudy-day.svg'
import weatherFunctions from "./weatherData.js";
import { getUserCity } from './ustLoc.js';
import { handleSearchClick,searchButton } from "./uiChanges.js";
// styles
import "./style.css";
const City =localStorage.getItem('city')
weatherFunctions (City);
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userLocation = handleSearchClick();
  console.log(userLocation)
  weatherFunctions (userLocation.city);


}) 


