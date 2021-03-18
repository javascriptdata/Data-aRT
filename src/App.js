/* eslint-disable camelcase */
import React, {useState} from "react";
import NavBar from './components/NavBar';
// import { reducer } from "./reducer";

// const defaultState = {
//   chart: [{ x:"", y:"", chartType:""}], //contains char props for each chart
//   dataframe: [{data:""}] //conatains data for each DataTable component
// };
import ChartPage from "./containers/ChartPage";
import DataTablePage from "./containers/DataTablePage";

function App() {
  const [type,SetType]=useState("");
  
  const[display,Setdisplay]=useState("Chart");

  const data={
    dataset: [1000,2000,3000,4000,5000,6000,7000],
    labels: ["January", "February", "March", "April", "May", "June", "July"],
  }
  console.log(data)
  return (
  <>
    <NavBar Setdisplay={Setdisplay}/>

    <div className="max-w-2xl mx-auto mt-20">
     <ChartPage data={data} 
      type={type}
      SetType={SetType}
      display={display}
     />

     <DataTablePage  display={display}/>
    </div>
  </>
    )
}

export default App;