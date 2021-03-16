import React from 'react'
import Chart from "../components/Chart";
import SidePlane from "../components/SidePlane";

function ChartPage(props) {
    return (
        <>
            <div  className="grid grid-cols-2 gap-10 px-5 py-20 sm:grid-cols-2 sm:gap-1 xl:px-40">
                <Chart dataset={props.data}/>
                <SidePlane/>
            </div>
        </>
    )
}

export default ChartPage
