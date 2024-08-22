// Data for the first chart (Usage throughout the month)
const usageCtx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(usageCtx, {
    type: 'line',
    data: {
        labels: ['7/12', '7/14', '7/16', '7/18', '7/20', '7/22'],
        datasets: [{
            label: 'Usage',
            data: [10, 25, 20, 15, 30, 35],
            borderColor: '#80ed99',
            fill: false,
            tension: 0.4,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Data for the second chart (Comparison with other machines)
const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
const comparisonChart = new Chart(comparisonCtx, {
    type: 'line',
    data: {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        datasets: [
            {
                label: 'Current Machine',
                data: [10, 15, 25, 30, 50],
                borderColor: '#80ed99',
                fill: false,
                tension: 0.4,
            },
            {
                label: 'Other Machines',
                data: [5, 20, 10, 35, 40],
                borderColor: '#000000',
                fill: false,
                tension: 0.4,
            },
            {
                label: 'Third Machine',
                data: [8, 18, 12, 28, 45],
                borderColor: '#f9c74f',
                fill: false,
                tension: 0.4,
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

