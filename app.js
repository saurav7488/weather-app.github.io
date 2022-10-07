const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const weather = document.querySelector("#wheather");
const search = document.querySelector("#search");
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const get_wheather = async (city) => {
    wheather.innerHTML=`<h2>Loading...<\h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showdata(data);
}
const showdata = (data) => {
    if(data.cod=="404"){
        wheather.innerHTML=`<h2>City not found<\h2>`
        return;
    }
    wheather.innerHTML = `
    <div> 
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${data.main.temp} &#176</h2>
    <h4>${data.weather[0].main}</h4>
</div> 
    `
}



form.addEventListener(
    "submit",
    function (event) {
        get_wheather(search.value);
        event.preventDefault();
    }
)