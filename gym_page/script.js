// script.js
document.addEventListener("DOMContentLoaded", function() {
    const machines = document.querySelectorAll('.machine');
    const homeButton = document.getElementById('homeButton');
    const scanButton = document.getElementById('scanButton');
    const accountButton = document.getElementById('accountButton');

    machines.forEach(machine => {
        machine.addEventListener('click', function() {
            const machineId = this.getAttribute('data-machine');
            alert(`Navigating to ${machineId}`);
            // Implement navigation logic here, e.g., window.location.href = `machine_page.html?machine=${machineId}`;
        });
    });

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

    setMachines('Planet Fitness')
});


async function setMachines(location){
    var getMachinesURL = 'https://us-east-1.aws.data.mongodb-api.com/app/e-moon-vjusocg/endpoint/getAllMachines'

    let response = await fetch(getMachinesURL)
        .then(data => {
            return data;
        })           //api for the get request
    
    const machinesObject = await response.json() 

    var machinesList = []

    for(var i = 0; i<machinesObject.length; i++){
        
        if(machinesObject[i].location == location){
            machinesList.push(machinesObject[i].machine_name)
        }
        
    }

    var innerHTML = ''
    var listMachinesHTML = document.getElementById('machineList')

    for(var item = 0; item < machinesList.length; item++){
        innerHTML += '<div class="machine" data-machine="machine1">' + machinesList[item] + '</div>'
    }

    listMachinesHTML.innerHTML = innerHTML
}