// script.js
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById('homeButton');
    const scanButton = document.getElementById('scanButton');
    const accountButton = document.getElementById('accountButton');

    homeButton.addEventListener('click', function() {
        alert('Navigating to Home Page');
        // Implement navigation logic here, e.g., window.location.href = `index.html`;
    });

    scanButton.addEventListener('click', function() {
        alert('Opening Camera to Scan QR Code');
        // Implement scan logic here, e.g., open camera to scan QR code
    });

    accountButton.addEventListener('click', function() {
        alert('Navigating to Account Page');
        // Implement navigation logic here, e.g., window.location.href = `account.html`;
    });

    setLocations();
});

async function setLocations(){
    const locations = []

    var getLocationsURL = 'https://us-east-1.aws.data.mongodb-api.com/app/e-moon-vjusocg/endpoint/getLocations'

    let response = await fetch(getLocationsURL)
        .then(data => {
            return data;
        });

    const locationsObject = await response.json(); 
    
    for(var i = 0; i < locationsObject.length; i++){
        var locationTitle = locationsObject[i].name;
        locations.push(locationTitle);
    }

    var locationListHTML = document.getElementById('location-list');

    var innerHTML = '';

    for(var location = 0; location < locations.length; location++){
        innerHTML += `<li>${locations[location]}</li>`;
    }

    locationListHTML.innerHTML = innerHTML;
}
