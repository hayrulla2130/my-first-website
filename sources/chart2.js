const newctx = document.getElementById('newChart');

  new Chart(newctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
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