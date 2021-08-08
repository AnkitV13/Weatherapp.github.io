const api = {
    key: "58424f2ce6eaeafdac61593298dc34d8",
    link: "https://api.openweathermap.org/data/2.5/"
}

// function called when user click on search button
function clickMe(){
    const searchbox = document.querySelector(".cont");
    console.log(searchbox.value);
    getDetails(searchbox.value);
}

// function to find details of weather
function getDetails(query){
    fetch(`${api.link}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayDetails);
}

// function to show details of weather
function displayDetails(weather){
    console.log(weather);
    let city = document.querySelector('.place .city');
    city.innerHTML=`${weather.name}, ${weather.sys.country}`;

    let now= new Date();
    let date = document.querySelector('.place .date');
    date.innerHTML = findDate(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = weather.weather[0].main;
    
    let max_min = document.querySelector('.min-max');
    max_min.innerHTML = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;

    let image = document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + weather.weather[0].icon +".png";
    console.log(image);
}

function findDate(d){
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
        ];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}


 