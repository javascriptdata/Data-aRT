import React from 'react'
import DataTable from "../components/DataTable";
import SidePlane from "../components/SidePlane";


function DataTablePage(props) {
    if(props.display==="Table"){
    return (
            <div>
      
                <input type="file" name="file" onChange={props.changeHandler} />
                { props.file && <DataTable datain={props.file} /> }           
            </div>
       
    )}

    return <div></div>
}

export default DataTablePage
