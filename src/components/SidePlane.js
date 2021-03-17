import React from "react";

export default function SidePlane({SetType}) {

  return(
    <div>
      <h1>SidePlane Component</h1>
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

 /* const onChange = e => SetType({[e.target.name]: e.target.value });

  const{chart}=type;
  
  const onSubmit = e => {
    e.preventDefault();
    //SetType("BarChart");    
};
  return (
        <form onSubmit={e => onSubmit(e)}>
          <div>
          <label>chartType</label>
          <select name='chart' onChange={e => onChange(e)} value={chart}>
              <option>BarChart</option>
              <option>LineChart</option>
              <option>PieChart</option>
          </select>
          <button>UPDATE</button>
          </div>

        </form>
  )
}*/