var ctx = document.getElementById('myChart').getContext('2d');

// Initialize your chart
var myChart = new Chart(ctx, {
    type: 'bar', // Specify the type of chart (bar, line, pie, etc.)
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Total Sales',
            data: [500, 700, 300, 900, 600, 400],
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Background color for bars
            borderColor: 'rgba(54, 162, 235, 1)', // Border color for bars
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Start y-axis at zero
            }
        }
    }
});





// for order status
const ctx2 = document.getElementById('orderStatusChart').getContext('2d');

const orderStatusChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Pending', 'Processing', 'Delivered', 'Cancelled'],
        datasets: [{
            label: 'Order Status',
            data: [12, 19, 8, 3], // Example counts — update with your real data
            backgroundColor: [
                'rgba(255, 206, 86, 0.7)',   // Pending (yellow)
                'rgba(54, 162, 235, 0.7)',   // Processing (blue)
                'rgba(75, 192, 192, 0.7)',   // Delivered (green)
                'rgba(255, 99, 132, 0.7)'    // Cancelled (red)
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        let value = context.raw;
                        return `${label}: ${value} orders`;
                    }
                }
            }
        }
    }
});