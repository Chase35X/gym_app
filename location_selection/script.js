// script.js
document.addEventListener("DOMContentLoaded", function() {
    const screens = document.querySelectorAll('.screen');
    screens[0].classList.add('active');

    // You can add event listeners here to handle screen changes
    const listItems = document.querySelectorAll('.location-list li');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            alert(`You selected: ${this.textContent}`);
            // Change screen logic can be added here
        });
    });

    setLocations()
});

async function setLocations(){
    const locations = []

    var getLocationsURL = 'https://us-east-1.aws.data.mongodb-api.com/app/e-moon-vjusocg/endpoint/getLocations'

    let response = await fetch(getLocationsURL)
        .then(data => {
            return data;
        })           //api for the get request
    
    const locationsObject = await response.json() 
    
    for(var i = 0; i<locationsObject.length; i++){
        var locationTitle = locationsObject[i].name
        locations.push(locationTitle)
    }

    var locationListHTML = document.getElementById('location-list')

    var innerHTML = ''

    for(var location = 0; location < locations.length; location++){
        innerHTML += `<li>${locations[location]}</li>`
    }

    locationListHTML.innerHTML = innerHTML

}
