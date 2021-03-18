import React from 'react'
import DataTable from "../components/DataTable";
import SidePlane from "../components/SidePlane";

function DataTablePage(props) {
    if(props.display==="Table"){
    return (
        <>
            <div className="grid grid-cols-2 gap-10 px-5 py-20 sm:grid-cols-2 sm:gap-1 xl:px-40" >
                <DataTable/>
               

            </div>
        </>
    )}

    return <div></div>
}

export default DataTablePage
