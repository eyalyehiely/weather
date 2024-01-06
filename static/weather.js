// const WEATHER_URL = `https://api.weatherapi.com/v1/current.json?key=dd5aeefe36824abb815195014240601&q=${city_name}&aqi=no`

function get_weather_data_1(){
    let city_name = prompt("Insert city name");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=dd5aeefe36824abb815195014240601&q=${city_name}&aqi=no`).then((response)=>{
        document.getElementById('location1').innerHTML = `Location${response.data.location.name}`
        document.getElementById('country1').innerHTML = response.data.location.country
        document.getElementById('local_time1').innerHTML = response.data.location.localtime
        document.getElementById('temprature1').innerHTML = response.data.current.temp_c
        document.getElementById('wind1').innerHTML = response.data.current.wind_kph
        document.getElementById('humidity1').innerHTML = response.data.current.humidity
        document.getElementById('last_updated1').innerHTML = response.data.current.last_updated
        document.getElementById('location1').innerHTML = response.data.location.name

    })
}

function get_weather_data_2(){
    let city_name = prompt("Insert city name");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=dd5aeefe36824abb815195014240601&q=${city_name}&aqi=no`).then((response)=>{
        document.getElementById('location2').innerHTML = response.data.location.name
        document.getElementById('country2').innerHTML = response.data.location.country
        document.getElementById('local_time2').innerHTML = response.data.location.localtime
        document.getElementById('temprature2').innerHTML = response.data.current.temp_c
        document.getElementById('wind2').innerHTML = response.data.current.wind_kph
        document.getElementById('humidity2').innerHTML = response.data.current.humidity
        document.getElementById('last_updated2').innerHTML = response.data.current.last_updated
        document.getElementById('location2').innerHTML = response.data.location.name
})
}



function get_weather_data_3(){
    let city_name = prompt("Insert city name");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=dd5aeefe36824abb815195014240601&q=${city_name}&aqi=no`).then((response)=>{
        document.getElementById('location3').innerHTML = response.data.location.name
        document.getElementById('country3').innerHTML = response.data.location.country
        document.getElementById('local_time3').innerHTML = response.data.location.localtime
        document.getElementById('temprature3').innerHTML = response.data.current.temp_c
        document.getElementById('wind3').innerHTML = response.data.current.wind_kph
        document.getElementById('humidity3').innerHTML = response.data.current.humidity
        document.getElementById('last_updated3').innerHTML = response.data.current.last_updated
        document.getElementById('location3').innerHTML = response.data.location.name
})
}
   

