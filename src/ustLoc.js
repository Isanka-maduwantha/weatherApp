let userLocation;
async function getUserLocation() {
    const response = await fetch(
      "https://api.geoapify.com/v1/ipinfo?apiKey=84e5be4101ec480ea2d86d6c2d7c3852",
      { mode: "cors" }
    );
    let locationdata = await response.json();
    return locationdata;
  }
  // Get user location using geoapify api
async function getUserCity() {
    await  getUserLocation().then((object)=>{
     userLocation =  object.city.name;
     localStorage.setItem ("city",userLocation)
   
    })
    
  }
  getUserCity()

  export { getUserCity};
