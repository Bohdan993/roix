import { Chart } from '../../libs/libs'
import {ctx, ctx2} from '../view'



const initChart = () => {
	let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Весь портфель', 'Только с ROIX+'],
        datasets: [{
            label: 'Затраты на рост удовлетворенности',
            data: [0, 0],
            backgroundColor: [
              	'rgba(68, 114, 196, 0.6)',
                'rgba(255, 0, 255, 0.6)',

            ],
            borderColor: [
            		'rgba(68, 114, 196, 1)',
                'rgba(255, 0, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
          tooltips: {
            mode: 'point'
        },
          legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
                fontSize: 16
            }
        },
    },
    // responsiveAnimationDuration: 500
});


let myChart2 = new Chart(ctx2, {
	type: 'bar',
	data: {
	    labels: ['Весь портфель', 'Только с ROIX+'],
	    datasets: [{
	        label: 'ROIX',
	        data: [0, 0],
	        backgroundColor: [
	          	'rgba(68, 114, 196, 0.6)',
	            'rgba(255, 0, 255, 0.6)',

	        ],
	        borderColor: [
	        		'rgba(68, 114, 196, 1)',
	            'rgba(255, 0, 255, 1)',
	        ],
	        borderWidth: 1
	    }]
	},
	options: {
	    scales: {
	        yAxes: [{
	            ticks: {
	                beginAtZero: true
	            }
	        }]
	    },
	      legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
                fontSize: 16
            }
        },
	    aspectRatio: 1
	},
	// responsiveAnimationDuration: 500
	});


document.addEventListener("roix+", function(event) {
 
    let num = +event.target.textContent.replace(/%/gi, '')

    myChart2.data.datasets[0].data[1] = num
    myChart2.update();
  });

document.addEventListener("roix2+", function(event) {
 
    let num = +event.target.textContent.replace(/%/gi, '')

    myChart2.data.datasets[0].data[0] = num
    myChart2.update();
  });


document.addEventListener("satisf", function(event) {
 
    let num = +event.target.textContent.replace(/%/gi, '')

    myChart.data.datasets[0].data[1] = num
    myChart.update();
  });


document.addEventListener("satisf2", function(event) {
 
    let num = +event.target.textContent.replace(/%/gi, '')

    myChart.data.datasets[0].data[0] = num
    myChart.update();
  });


}


function addData(chart, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
    });
    chart.update();
}





export default initChart

