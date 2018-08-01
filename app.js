// Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init Weather Object 

const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);

//Init UI
const ui = new UI();

//Get Weather for DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather)

//Change location element
document.getElementById('w-change-btn').addEventListener('click', function(e){

    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('state').value;

    weather.changeLocation(city, countryCode);

    //Get Weather again
    getWeather ()
    
    //Close Model
    $('#locModal').modal('hide');
})


function getWeather (){
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(err => console.log(err));
}