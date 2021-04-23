import React from 'react'
import Chart from './Chart'

export default function ChartsViz({chartComp}) {
  return (
    <div>
      {
        chartComp.map((chart)=> {
          return <Chart 
              labels={chart.labels}
              dataset={chart.data}
              type={chart.type}
              key={chart.key}
          />
        })
      }
    </div>
  )
}
