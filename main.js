const ctx = document.getElementById('pieChart');
const ctx2 = document.getElementById('lineChart');

function createChart(id, type){
    let delayed;
    new Chart(id, {
    type: type,
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: true,
            tooltip: true,
            borderColor: '#000'
        },
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
        }
    }
    });
}

createChart(ctx, 'pie', )
createChart(ctx2, 'line' )