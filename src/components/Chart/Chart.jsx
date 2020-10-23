import React, { useState, useEffect } from 'react';
import { fetchDailyData } from "../../api"

import { Line, Bar, defaults } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });
    defaults.global.defaultFontFamily = "Bahnschrift Condensed";
    defaults.global.defaultFontColor = 'white';
    defaults.global.defaultFontSize = 20;
    const lineChart = (
        (dailyData.length !== 0) ?
            (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: "Confirmed",
                            borderColor: '#3333ff',
                            fontColor: 'white',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: "Deaths",
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fontColor: 'white',
                            fill: true
                        }],
                        options: {
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontSize: 30,
                                        fontColor: "red"
                                    }
                                }]
                            }
                        }
                    }
                    }
                />) : null
    );


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;