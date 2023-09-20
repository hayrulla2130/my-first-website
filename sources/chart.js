const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [  // Add this array to set colors
                'rgba(255, 99, 132, 0.5)',   // Color for 'Red'
                'rgba(54, 162, 235, 0.5)',  // Color for 'Blue'
                'rgba(255, 206, 86, 0.5)',  // Color for 'Yellow'
                'rgba(75, 192, 192, 0.5)',  // Color for 'Green'
                'rgba(153, 102, 255, 0.5)', // Color for 'Purple'
                'rgba(255, 159, 64, 0.5)'   // Color for 'Orange'
            ],
            borderColor: [ // Optionally, you can also set the border colors in the same manner
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white'  // Set color for legend labels
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'  // Set color for y-axis labels
                }
            },
            x: {
                ticks: {
                    color: 'white'  // Set color for x-axis labels
                }
            }
        }
    }
    
});