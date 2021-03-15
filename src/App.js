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
    dataset: [1,2,3,4,5],
    type:"Bar chart"
  }
  console.log(data.dataset)
  return (
  <>
    <div>
   <ChartPage data={data}/>
   
    </div>
  </>
    )
}

export default App;
