JSC.Chart('chart', {
    type: 'vertical column',
    series: [
        {
            name: 'Income',
            points: [
                { x: 'January', y: 60000 },
                { x: 'February', y: 65000 },
                { x: 'March', y: 63000 },
                { x: 'April', y: 67500 },
                { x: 'May', y: 66000 }
            ]
        }, {
            name: 'Expense',
            points: [
                { x: 'January', y: 27000 },
                { x: 'February', y: 26500 },
                { x: 'March', y: 28500 },
                { x: 'April', y: 26000 },
                { x: 'May', y: 30000 }
            ]
        }
    ]
    
});
const balance = document.getElementById('net-balance');
const netIncome = document.getElementById('net-income');
const netExpense = document.getElementById('net-expense');
const income = 321500;
const expense = 138000;
balance.innerText = (income - expense);
netIncome.innerText = income;
netExpense.innerText = expense;

const minSalary = document.getElementById('minS');
const maxSalary = document.getElementById('maxS');

minSalary.innerText = 60000;
maxSalary.innerText = 67500;

const minExpense = document.getElementById('minE');
const maxExpense = document.getElementById('maxE');

minExpense.innerText = 26000;
maxExpense.innerText = 30000;





























































































































































// JSC.fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
//     .then(function (response) {
//         return response.text();
//     })
//     .then(function (text) {
//         let series = csvToSeries(text);
//         renderChart(series);
//     })
//     .catch(function (error) {
//         //Something went wrong
//         console.log(error);
//     });

// function csvToSeries(text) {
//     const lifeExp = 'average_life_expectancy';
//     let dataAsJson = JSC.csv2Json(text);
// 	let male = [], female = [];
// 	dataAsJson.forEach(function (row) {
// 		 //add either to male, female, or discard.
// 		if (row.race === 'All Races') {
// 			if (row.sex === 'Male') {
// 				male.push({x: row.year, y: row[lifeExp]});
// 			} else if (row.sex === 'Female') {
// 				female.push({x: row.year, y: row[lifeExp]});
// 			}
// 		}
// 	});
//     console.log([male, female]);
//     return [
//         {name: 'Male', points: male},
//         {name: 'Female', points: female}
//      ];
// }

// function renderChart(series){
//     JSC.Chart('chartDiv', {
// 		title_label_text: 'Life Expectancy in the United States',
// 		annotations: [{
// 			label_text: 'Source: National Center for Health Statistics',
// 			position: 'bottom left'
// 		}],
//         legend_visible: false,
// 		defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
// 		defaultPoint_tooltip: '%seriesName <b>%yValue</b> years',
// 		xAxis_crosshair_enabled: true,
// 		series: series
// 	});
//  }