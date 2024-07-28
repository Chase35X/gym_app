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
});
