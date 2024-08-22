// script.js
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById('homeButton');
    const scanButton = document.getElementById('scanButton');
    const accountButton = document.getElementById('accountButton');
    const addSetButton = document.getElementById('addSetButton');
    const weightInput = document.getElementById('weight');
    const repsInput = document.getElementById('reps'); 

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

    // Line chart setup
    const lineChart = new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Output Today (XL)',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add set button logic
    addSetButton.addEventListener('click', function() {
        const weight = weightInput.value;
        const reps = repsInput.value;

        if (weight && reps) {
            const newSetLabel = `Set ${lineChart.data.labels.length + 1}`;
            lineChart.data.labels.push(newSetLabel);
            lineChart.data.datasets[0].data.push(weight*reps);
            lineChart.update();

            inputSet(reps, weight, 'chaselen@bu.edu', 'Planet Fitness', 'TestingMachine')

            weightInput.value = '';
            repsInput.value = '';
        } else {
            alert('Please enter both weight and reps');
        }
    });
});

async function inputSet(rep, weight, user, location, machine){
    var inputSetURL = 'https://us-east-1.aws.data.mongodb-api.com/app/e-moon-vjusocg/endpoint/inputSet?arg1='

    inputSetURL += rep + '&arg2=' + weight + '&arg3=' + user + '&arg4=' + location + '&arg5=' + machine

    const options = {
        method: 'POST'
    };

    let response = await fetch(inputSetURL, options)
        .then(data => {
            return data;
        })           //api for the get request
    
    const output = await response.json() 

    return output
}
