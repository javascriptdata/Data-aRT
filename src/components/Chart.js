import React from "react";
import { Bar as BarChart } from 'react-chartjs-2';
//import { Line } from "react-chartjs-2";

export default function Chart({dataset}) {
  let data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: [65, 59, 80, 121, 180, 250, 400],
    }]
  };
  let options = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  return(
     <>
     <div>
        <BarChart data={data} options={options} width="600" height="250" />
      </div>
      <div>
          <h1>{dataset.type}</h1>

          {dataset.dataset}
      </div>
     </>
     )
}
