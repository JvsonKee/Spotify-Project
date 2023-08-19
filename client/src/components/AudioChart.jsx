import { Chart } from 'chart.js';

let xValues = ["acousticness", "danceability", "energy", "instrumentalness", "liveness", "speechiness", "valence"];
let yValues = [0.7, 0.2, 0.6, 0.8, 0.2, 0.6, 0.3];
let barColours = ['rgba(254, 96, 96, 0.3)',
                'rgba(255, 149, 72, 0.3)',
                'rgba(255, 206, 79, 0.3)',
                'rgba(255, 149, 72, 0.3)',
                'rgba(99, 255, 133, 0.3)',
                'rgba(46, 155, 255, 0.3)',
                'rgba(185, 71, 255, 0.3)',
                'rgba(255, 88, 238, 0.3)'];

let barOutlineColours = ['rgba(254, 96, 96)', 
                'rgba(255, 149, 72)',
                'rgba(255, 206, 79)',
                'rgba(255, 149, 72)',
                'rgba(99, 255, 133)',
                'rgba(46, 155, 255)',
                'rgba(185, 71, 255)',
                'rgba(255, 88, 238)'];


function AudioChart() {
    const ctx = document.getElementsByClassName('chart');
    new Chart(ctx,
    {
        type: "bar",
        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColours,
            borderColor: barOutlineColours,
            borderWidth: 1,
            data: yValues
        }]
        },
    });
    
    return (
    <div className="chart-container">
        <canvas className="chart" width="700px"></canvas>
    </div> 
    )
}

export default AudioChart;