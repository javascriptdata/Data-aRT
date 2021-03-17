/* eslint-disable camelcase */
import React from "react";
// import { reducer } from "./reducer";

// const defaultState = {
//   chart: [{ x:"", y:"", chartType:""}], //contains char props for each chart
//   dataframe: [{data:""}] //conatains data for each DataTable component
// };
import ChartPage from "./containers/ChartPage";
import DataTablePage from "./containers/DataTablePage";

function App() {
  const data={
    dataset: [1000,2000,3000,4000,5000,6000,7000],
    type:"Bar chart"
  }
  console.log(data)
  return (
  <>
    <div className="max-w-2xl mx-auto mt-20">
     <ChartPage data={data}/>
   
    </div>
  </>
    )
}

export default App;
