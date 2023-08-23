import { Chart } from 'chart.js';

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];


new Chart(
    document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  }
});


function TestChart() {

    return (
        <div>
            <canvas id="myChart"></canvas>
        </div>
    )
}

export default TestChart