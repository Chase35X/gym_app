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

    initCharts();
});

function initCharts() {
    // Grouped Bar Chart for "Arsenal Shoulder Press"
    var ctxGroupedBar = document.getElementById('groupedBarChart').getContext('2d');
    new Chart(ctxGroupedBar, {
        type: 'bar',
        data: {
            labels: ['7/12', '7/15', '7/20', '7/28', '8/1'],
            datasets: [{
                label: 'Set 1',
                data: [10, 20, 15, 30, 25],
                backgroundColor: '#FF6384'
            }, {
                label: 'Set 2',
                data: [15, 25, 20, 35, 30],
                backgroundColor: '#36A2EB'
            }, {
                label: 'Set 3',
                data: [20, 30, 25, 40, 35],
                backgroundColor: '#FFCE56'
            }, {
                label: 'Set 4',
                data: [25, 35, 30, 45, 40],
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

    // Doughnut Chart for "Percentage of total monthly output"
    var ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Achieved', 'Remaining'],
            datasets: [{
                data: [76, 24],
                backgroundColor: ['#FF6384', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#FFCE56']
            }]
        },
        options: {
            cutout: '70%',
        }
    });

    // Area Chart for "Strength Compared to Last Month"
    var ctxArea = document.getElementById('areaChart').getContext('2d');
    new Chart(ctxArea, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'This Month',
                data: [10, 30, 50, 0],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Last Month',
                data: [30, 20, 40, 25],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const apiKey = ''; // Replace with your actual OpenAI API key
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const fetchChatGPTResponse = async (userMessage) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',  // Ensure this model is correct and available
                messages: [{ role: 'user', content: userMessage }],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const assistantMessage = data.choices[0].message.content;
        return assistantMessage;
    } catch (error) {
        console.error('Error fetching ChatGPT response:', error);
    }
};

// Example usage
fetchChatGPTResponse("Hello, ChatGPT! How are you today?")
    .then(response => console.log(response));

