const weather = document.querySelector(".js-weather");

const API_KEY = "a39ce3fe402af817d48d43a76afa56f4";
const coords = 'coords';

function getWeather (lat, lon){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function (response) {
    return response.json();
  }).then(function (json) { 
    //   console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} ${place}`;
   })
}
function saveCoords (coordsObj){
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}
function handleGeoSucces(position){
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log('위치 정보를 읽을 수 없습니다.');
}
function askForcoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}


function loadCoords (){
    const loadedCoords = localStorage.getItem(coords);
    if(loadedCoords === null){
        askForcoords();
    }else{
        const paresCoords = JSON.parse(loadedCoords);
        // console.log(paresCoords);
        getWeather(paresCoords.latitude,paresCoords.longitude);
    }
}







function init () {
    loadCoords();
}
init();