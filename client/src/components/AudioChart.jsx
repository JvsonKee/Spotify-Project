import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { styled } from 'styled-components';

const ChartContainer = styled.div`
    width: clamp(200px, 90vw, 600px);
    height: clamp(200px, 90vw, 600px);
`


ChartJS.register();

const barColours = [
    'rgba(254, 96, 96, 0.3)',
    'rgba(255, 149, 72, 0.3)',
    'rgba(255, 206, 79, 0.3)',
    'rgba(99, 255, 133, 0.3)',
    'rgba(46, 109, 255, 0.3)',
    'rgba(76, 39, 243, 0.3)',
    'rgba(185, 71, 255, 0.3)',
];

const borderColours = [
    'rgb(254, 96, 96)', 
    'rgb(255, 149, 72)',
    'rgb(255, 206, 79)',
    'rgb(99, 255, 133)',
    'rgb(46, 109, 255)',
    'rgb(76, 39, 243)',
    'rgb(185, 71, 255)',
];

function AudioChart( {featureData} ) {

    const [chartData, setChartData] = useState( {
        labels: featureData?.map((data) => data.label),
        datasets: [{
            label: '',
            data: featureData?.map((score) => score.value),
            backgroundColor: barColours,
            borderColor: borderColours,
            borderWidth: 1 
        }]
    })

    return (
        <ChartContainer>
            <Bar
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
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }}
            />
        </ChartContainer> 
    )
}

AudioChart.propTypes = {
    featureData: PropTypes.array
}

export default AudioChart;