import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      // display: true,
      text: "Earning",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Earning",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
      backgroundColor: "rgba(255, 99, 132)",
      animations: {
        y: {
          duration: 1000,
          delay: 500,
        },
      },
    },
    {
      label: "Total Earning",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
      backgroundColor: "rgba(53, 162, 235)",
      animations: {
        y: {
          duration: 1000,
          delay: 500,
        },
      },
    },
  ],
};

export function VerticalGraph() {
  return <Bar options={options} data={data} />;
}
