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

    // Grouped Bar Chart for "Most improved lift of the month"
    var ctxImprovedLift = document.getElementById('improvedLiftChart').getContext('2d');
    var improvedLiftChart = new Chart(ctxImprovedLift, {
        type: 'bar',
        data: {
            labels: ['8/1', '8/6', '8/16', '8/27'],
            datasets: [{
                label: 'Set 1',
                data: [10, 20, 15, 30],
                backgroundColor: '#FF6384'
            }, {
                label: 'Set 2',
                data: [15, 25, 20, 35],
                backgroundColor: '#36A2EB'
            }, {
                label: 'Set 3',
                data: [20, 30, 25, 40],
                backgroundColor: '#FFCE56'
            }, {
                label: 'Set 4',
                data: [25, 35, 30, 45],
                backgroundColor: '#4BC0C0'
            }]
        },
        options: {
            scales: {
                x: {
                    stacked: false
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart for "Most used machines this month"
    var ctxPie = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Arsenal Shoulder Press', 'Cybex Incline Bench', 'Hoist Leg Extension', 'Arsenal Lateral Raise', 'Arsenal Tricep Extension'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        },
        options: {}
    });

});
