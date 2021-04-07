import React, { useState } from 'react';
import DataTable from './components/DataTable';
import NavBar from './components/NavBar';
import ChartPage from "./containers/ChartPage";
import DataTablePage from "./containers/DataTablePage";

function App2() {
  const [type,SetType]=useState("");
  
  const[display,Setdisplay]=useState("Chart");

  const data={
    dataset: [1000,2000,3000,4000,5000,6000,7000],
    labels: ["January", "February", "March", "April", "May", "June", "July"],
  }
  
  const [file, setFile ] = useState()

  const changeHandler = function(event) {
      const content = event.target.files[0]
      const reader = new FileReader();
      reader.onload = function (t) {
        const data = t.target.result;

        setFile(data.split("\n"));
      }
      reader.readAsText(content);
  }
  return (
    <>
      <NavBar Setdisplay={Setdisplay}/>
  
      <div className="max-w-2xl mx-auto mt-20">
       <ChartPage data={data} 
        type={type}
        SetType={SetType}
        display={display}
       />
  
       <DataTablePage file={file} display={display} changeHandler={changeHandler}/>
      </div>
    </>
      )
  // return (
    
  //   <div>
  //     <NavBar/>
      
  //     <input type="file" name="file" onChange={changeHandler} />
  //     { file && <DataTable datain={file} /> }
  //   </div>
  // )
}

export default App2