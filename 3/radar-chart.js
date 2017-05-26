window.onload = () => {
    const color = Chart.helpers.color;
    window.myRadar = new Chart(document.getElementById("radar"), {
        type: 'radar',
        data: {
            labels: _.map(type, (v, k) => v.name),
            datasets: [
                {
                    label: '抗性',
                    backgroundColor: color(colors.green).alpha(0.5).rgbString(),
                    data: _.map(type, (v, k) => _.values(v.resistance).length)
                },
                {
                    label: '弱点',
                    backgroundColor: color(colors.red).alpha(0.5).rgbString(),
                    data: _.map(type, (v, k) => _.values(v.weakness).length)
                }]
        },
        options: {
            legend: {
                position: 'top',
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    })
};

const colors = {
    blue: 'rgb(54, 162, 235)',
    green: 'rgb(75, 192, 192)',
    grey: 'rgb(201, 203, 207)',
    orange: 'rgb(255, 159, 64)',
    purple: 'rgb(153, 102, 255)',
    red: 'rgb(255, 99, 132)',
    yellow: 'rgb(255, 205, 86)'
};

