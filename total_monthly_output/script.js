document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById('homeButton');
    const scanButton = document.getElementById('scanButton');
    const accountButton = document.getElementById('accountButton');

    homeButton.addEventListener('click', function () {
        alert('Navigating to Home Page');
        // Implement navigation logic here
    });

    scanButton.addEventListener('click', function () {
        alert('Opening Camera to Scan QR Code');
        // Implement scan logic here
    });

    accountButton.addEventListener('click', function () {
        alert('Navigating to Account Page');
        // Implement navigation logic here
    });

    setScreen();
    initPieChart(); // Initialize the pie chart
});

async function setScreen(){
    var data = await getUserData('chaselen@bu.edu');
    var totalOutput = getTotalOutput(data);
    var workoutList = getWorkoutsInList(data);
    var workoutOutputs = getWorkoutsOutputs(data);

    setPieChart(workoutList, workoutOutputs);
    SetListOfWorkouts(workoutList, data, totalOutput);
}

function initPieChart() {
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Machine A', 'Machine B', 'Machine C'],
            datasets: [{
                data: [30, 45, 25],
                backgroundColor: [
                    'rgba(0, 0, 0)',
                    'rgba(65, 65, 65)',
                    'rgba(114, 114, 114)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(65, 65, 65, 1)',
                    'rgba(114, 114, 114, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}
