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

    setScreen()
});

async function setScreen(){
    var data = await getUserData('chaselen@bu.edu')
    var totalOutput = getTotalOutput(data)
    var workoutList = getWorkoutsInList(data)
    var workoutOutputs = getWorkoutsOutputs(data)

    setPieChart(workoutList, workoutOutputs)
    SetListOfWorkouts(workoutList, data, totalOutput)
}

function setPieChart(workoutList, outputList){
    const pieChart = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: workoutList,
            datasets: [{
                data: outputList,
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
}

function SetListOfWorkouts(workoutList, data, totalOutput){
    var workoutListHtml = document.getElementById('workoutList');

    var inputText = '<div class="summary-item"><span>Total Monthly Output:</span><span>' + totalOutput + ' VL</span></div>'

    for(var i = 0; i<workoutList.length; i++){
        var workout = workoutList[i];
        var workoutTotalOutput = getWorkoutOutput(data, workout)

        inputText += '<div class="summary-item"><span>' + workout + '</span><span>' + workoutTotalOutput + ' VL</span></div>'
    }

    workoutListHtml.innerHTML = inputText

}

async function getUserData(email){
    var apiURL = 'https://us-east-1.aws.data.mongodb-api.com/app/e-moon-vjusocg/endpoint/getUserSets?arg1=' + email

    let response = await fetch(apiURL)
        .then(data => {
            return data;
        })           //api for the get request
    
    const user = await response.json() 
    return user
}

function getTotalOutput(list){
    var total = 0;

    for (var i = 0; i<list.length; i++){
        total += list[i].reps * list[i].weight;
    }

    return total
}

function getWorkoutOutput(list, workout){
    var total = 0;

    for (var i = 0; i<list.length; i++){
        if (list[i].machine == workout){
            total += (list[i].reps * list[i].weight)
        }

    }

    return total
}

function getWorkoutsOutputs(list){
    
    var workoutsOutputsList = []
    
    for (var i = 0; i<list.length; i++){
        workoutsOutputsList.push(getWorkoutOutput(list, list[i].machine))
    }

    return workoutsOutputsList
}

function getWorkoutsInList(list){
    var workouts = []

    for (var i = 0; i<list.length; i++){
        if (workouts.includes(list[i].machine)){
            
        }

        else{
            workouts.push(list[i].machine)
        }
    }

    return workouts
}


