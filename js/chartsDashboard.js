var ctx = document.getElementById('cliques').getContext('2d');
var pedidosTotais = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['01', '05', '10', '15'],
        datasets: [{
            label: ['Total de pedidos por dia'],
            data: [0, 5, 7, 4],
            backgroundColor: [
                'rgba(7, 193, 84, 0.55)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});