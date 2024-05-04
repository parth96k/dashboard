import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animations: {
    radius: {
      duration: 700,
      easing: 'linear',
      loop: (context) => context.active
    }
  },
  hoverRadius: 10,
  hoverBackgroundColor: 'yellow',
  interaction: {
    mode: 'nearest',
    intersect: false,
    axis: 'x'
  },

  scales: {
    yAxes: [{
        display: true,
        ticks: {
            min:0,
            max:100
        },

    }]
},
  plugins: {
    title: {
      // display: true,
      text: 'Performance',  
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Shipments',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 70000 })),
      borderColor: [
        "rgba(54, 162, 235, 1)",],
      backgroundColor: [  "rgba(255, 99, 132, 0.2)"],
      pointStyle: ['rectRounded'],
      pointRadius: 5,
      borderWidth: 3,
      pointHoverRadius: 15,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      animations: {
        y: {
          duration: 100,
          delay: 500
        }
      },
    },
    {
      label: 'Total Shipments',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 70000 })),
      borderColor: 'rgba(221, 120, 51, 1)',
      backgroundColor: 'rgba(132, 118, 108, 1)',
      pointRadius: 5,
      borderWidth: 2,
      pointHoverRadius: 15,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      animations: {
        y: {
          duration: 1000,
          delay: 500
        }
      },

    },
  ],
};

export function LineChart() {
    
  return <Line options={options} data={data} />;
}
