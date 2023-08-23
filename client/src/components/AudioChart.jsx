import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import { useState } from 'react';

const barColours = [
    'rgba(254, 96, 96, 0.3)',
    'rgba(255, 149, 72, 0.3)',
    'rgba(255, 206, 79, 0.3)',
    'rgba(255, 149, 72, 0.3)',
    'rgba(99, 255, 133, 0.3)',
    'rgba(46, 155, 255, 0.3)',
    'rgba(185, 71, 255, 0.3)',
    'rgba(255, 88, 238, 0.3)'
];

const borderColours = [
    'rgba(254, 96, 96)', 
    'rgba(255, 149, 72)',
    'rgba(255, 206, 79)',
    'rgba(255, 149, 72)',
    'rgba(99, 255, 133)',
    'rgba(46, 155, 255)',
    'rgba(185, 71, 255)',
    'rgba(255, 88, 238)'
];

function AudioChart( {trackData} ) {

    console.log('trackData from audio chart', trackData)
    const [chartData, setChartData] = useState({
        labels: trackData.map((data) => data.label),
        datasets: [{
            label: '',
            data: trackData.map((score) => score.value),
            backgroundColor: barColours,
            borderColor: borderColours,
            borderWidth: 1 
        }]
    })

    return (
        <div className="chart">
            <Bar width='600px' height='600px'
                data={ chartData }
                options={{
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        },
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Audio Features',
                            font: {
                                size: 18,
                            },
                            color: '#ffffff'
                        },
                        legend: {
                            display: false
                        },
                    }
                }}
            />
        </div> 
    )
}

export default AudioChart;