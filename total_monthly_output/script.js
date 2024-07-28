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

    // Pie chart setup
    const pieChart = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: ['Lift 1', 'Lift 2', 'Lift 3', 'Lift 4', 'Lift 5'],
            datasets: [{
                data: [20, 25, 15, 30, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
