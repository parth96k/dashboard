import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);

export const options = {
  responsive: true,
  animations: {
    radius: {
      duration: 700,
      easing: 'linear',
      loop: (context) => context.active
    }
  },
  hoverRadius: 2,
  hoverBackgroundColor: 'yellow',
  interaction: {
    mode: 'nearest',
    intersect: false,
    axis: 'x'
  },
  plugins: {
    title: {
    //   display: true,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Total Customers',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.1)',
      pointRadius: 5,
      animations: {
        y: {
          duration: 1000,
          delay: 500
        }
      },
      pointHoverRadius: 15,
    },
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} />;
}
