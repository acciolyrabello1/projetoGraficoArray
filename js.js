
var departamento = document.getElementById('departamento');
var quantidade = document.getElementById('quantidade');
var exibir = document.getElementById('exibir');
var listadepartamento = [];
var listaquantidades = [];

function adicionar(){
    listadepartamento.push(departamento.value);
    listaquantidades.push(quantidade.value);
    
}
function gerar(){

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: listadepartamento,
        datasets: [{
            label: '# of Votes',
            data: listaquantidades,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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
