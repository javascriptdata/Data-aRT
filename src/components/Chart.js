import React, {useState} from "react";
import { Bar as BarChart } from 'react-chartjs-2';
import { Line as LineChart } from "react-chartjs-2";
import { Pie as PieChart} from "react-chartjs-2";


export default function Chart({dataset}) {
  //let type= "BarChart";
  const [type,SetType]=useState("");
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
      data: dataset.dataset,
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
  }
  if(type==="BarChart"){
    return(
      <div>
         <BarChart data={data} options={options} width="800" height="800" />
         <button onClick={() => {
         SetType("BarChart");
        }}>Barchart</button>
         {" "}
         <button onClick={() => {
         SetType("LineChart");
        }}>Linechart</button>
         {" "}
         <button onClick={() => {
         SetType("PieChart");
        }}
         >Piechart</button>
      </div>
    )
  }
  else if(type==="LineChart"){
    return(
      <div>
        <LineChart data={data} options={options} width="800" height="800" />
        <button onClick={() => {
         SetType("BarChart");
        }}>Barchart</button>
         {" "}
         <button onClick={() => {
         SetType("LineChart");
        }}>Linechart</button>
         {" "}
         <button onClick={() => {
         SetType("PieChart");
        }}
         >Piechart</button>
      </div>
    )
  }
  
  else if(type==="PieChart"){
    return(
      <div>
         <PieChart data={data} options={options} width="800" height="800" />
        <button onClick={() => {
         SetType("BarChart");
        }}>Barchart</button>
         {" "}
         <button onClick={() => {
         SetType("LineChart");
        }}>Linechart</button>
         {" "}
         <button onClick={() => {
         SetType("PieChart");
        }}
         >Piechart</button>
      </div>
    )
  }
  return(
     <>
     <div>
        <h1>NO Chart </h1>
        <button onClick={() => {
         SetType("BarChart");
        }}>Barchart</button>
        {" "}
         <button onClick={() => {
         SetType("LineChart");
        }}>Linechart</button>
         {" "}
         <button onClick={() => {
         SetType("PieChart");
        }}
         >Piechart</button>
      </div>
      
     </>
     )
}
