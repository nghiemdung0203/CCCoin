import React, {useEffect, useRef, useState} from 'react'
import { Line } from 'react-chartjs-2'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Chart from 'chart.js/auto'

const HistoryCoin = ({Dataa}) => {
    return (
        <div>
            <Line
            data={{
                labels: Dataa.map(item => item.t),
                datasets: [
                    {
                        label: 'My First dataset',
                        data: Dataa,
                        backgroundColor: 'rgba(174, 305, 194, 0.4)',
                        borderColor: 'rgba(174, 305, 194, 0.4)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',   
                    }
                ]

            }}
            options={{
                
            }}
            height={400}
            width={400}
            />
        </div>
    )
}

export default HistoryCoin