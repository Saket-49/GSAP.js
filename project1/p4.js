// Food Waste Bar Chart Data
const wasteData = {
    labels: ['Fruits', 'Vegetables', 'Meat', 'Grains', 'Dairy'], // Categories of food waste
    datasets: [{
        label: 'Food Waste (in kilograms)',
        data: [35, 50, 20, 45, 30], // Example data for each food category
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
};

// Donation Pie Chart Data
const donationData = {
    labels: ['Fruits Donated', 'Vegetables Donated', 'Meat Donated', 'Grains Donated', 'Dairy Donated'], // Donation categories
    datasets: [{
        label: 'Donations (in kilograms)',
        data: [20, 30, 10, 25, 15], // Example donation data for each category
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
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
};

// Configuration for Food Waste Bar Chart
const wasteChartConfig = {
    type: 'bar',
    data: wasteData,
    options: {
        responsive: true,
        animation: {
            duration: 1500, // Animation duration in ms
            easing: 'easeOutBounce', // Animation effect
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10, // Adjusts step size for the Y-axis scale
                }
            }
        }
    }
};

// Configuration for Donation Pie Chart
const donationChartConfig = {
    type: 'pie',
    data: donationData,
    options: {
        responsive: true,
        animation: {
            duration: 1500, // Animation duration in ms
            easing: 'easeOutBounce', // Animation effect
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' kg';
                    }
                }
            }
        }
    }
};

// Create the Food Waste Bar Chart
const wasteCtx = document.getElementById('wasteChart').getContext('2d');
const wasteChart = new Chart(wasteCtx, wasteChartConfig);

// Create the Donation Pie Chart
const donationCtx = document.getElementById('donationChart').getContext('2d');
const donationChart = new Chart(donationCtx, donationChartConfig);
