const input = document.querySelector(".input");
const button=document.getElementById("bttn");
const temp = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind");
const image = document.querySelector(".defaultImage");
const LocationNotFound = document.querySelector('.locationNotFound');
const weatherbody=document.querySelector('.weatherBody');
const img=document.querySelector('.defaultImage');
async function checkWeather(city){
  const apiKey = "6f89d272d5fc5f1bd38d2894638575ba";
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ apiKey}`;
 

  const weatherData = await fetch(`${url}`).then(response => response.json());
  console.log(weatherData);

  if(weatherData.cod === "404"){
    LocationNotFound.style.display="flex";
    img.style.display="none";
    console.log("error");
    return;
  }
  else{
    LocationNotFound.style.display="none";
    img.style.display="flex";
  }

  temp.innerHTML=`${Math.round(weatherData.main.temp - 273.15)}&#x2103;`;
  description.innerHTML=`${ weatherData.weather[0].description}`;
  humidity.innerHTML=`${ weatherData.main.humidity}%`;
  wind_speed.innerHTML=`${weatherData.wind.speed}km/h`;

  

  switch(weatherData.weather[0].main){
    case "Clouds": image.src="assets/cloudy.jpeg";
    break;
    
    case "Clear":image.src="assets/clear.png";
    break;
    case "Rain":image.src="assets/heavy rain.jpg";
    break;
    case "Snow":image.src="assets/snow.jpg";
    break;
    case "Mist":image.src="assets/mist.avif";
    break;
    
  }
}



button.addEventListener('click',()=>{
    checkWeather(input.value);
});
