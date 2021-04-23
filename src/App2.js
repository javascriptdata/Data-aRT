import React, { useState } from 'react';
import DataTables from './components/DataTables';
import { SidePlane } from './components/SidePlanes'
import ChartsViz from './components/ChartsViz'
import ChartPlane from './components/ChartPlane'
import { read_csv } from 'danfojs/src/io/reader'

function App2() {
  const [file, setFile ] = useState()
  const [dataComp, setDataComp] = useState([])
  const [showSidePlane, setSidePlane] = useState(false)
  const [compIndex, setCompIndex] = useState()
  const [chartType, setChartType] = useState()
  const [dfOpsType, setDfOpsType] = useState()
  const [chartComp, setChartComp] = useState([])

  const changeHandler = function(event) {
      const content = event.target.files[0]
      const url = URL.createObjectURL(content)

      read_csv(url, {start: 0, end: 20}).then(df => {
          const columns = df.columns
          const values = df.values
          setDataComp(prev => {
            let new_data = prev.slice()
            let key = new_data.length +1
            let dict = {
              columns: columns,
              values: values,
              df: df,
              keys: "df" + key
            }
            new_data.push(dict)
            return new_data
          })
        setFile(true);


      })
  }

  const charts = ["BarChart", "LineChart", "PieChart"]
  const dataFrameOps = ["Arithemtic","Describe", "Df2df", "Query"]

  const handleChart = (e) => {
    const value = e.target.innerHTML

    setChartType(value)
    setSidePlane("chart")
  }

  const handleDfops = (e) =>{
    const value = e.target.value
    
    setDfOpsType(value)
    setSidePlane("datatable")
    
  }

  return (
    <div className="max-w-full mx-auto border-2 mt-10">
      <div className="flex flex-col">
        <div className="border-2 mb-10 flex flex-row">
          <input type="file" name="file" onChange={changeHandler} />
          <div className="mr-4">
            {
              charts.map((chart, i)=>{
                return <button 
                          className="bg-blue-500 p-2 text-white rounded-sm mr-2"
                          onClick={handleChart}
                      >
                        {chart}
                      </button>
              })
            }
          </div>
          <div>
            <span className="mr-2">DataFrame Operations</span>
            <select className="border" onChange={handleDfops}>
              <option value="None" >None</option>
              {
                dataFrameOps.map((dfops, i)=>{
                    return <option value={dfops} key={i}>{dfops}</option>
                })
              }
            </select>
          </div>

        </div>
        <div className="flex flex-row justify-between border-2">
          <div className="border-2 w-full">
            <div>
              { file && 
                <DataTables 
                    datacomp={dataComp} 
                    setSidePlane={setSidePlane}
                    setCompIndex={setCompIndex}
                /> 
              }
              
              { (chartComp.length > 0) && 
                <ChartsViz
                    chartComp={chartComp}
                /> 
              }
            </div>
            
          </div>
          {showSidePlane 
            && 
            (
              showSidePlane === "datatable" ? 
              <div className="border-2 w-1/3">
                <SidePlane
                  dataComp={dataComp[compIndex]} 
                  dataComps={dataComp}
                  df_index={compIndex}
                  setDataComp={setDataComp}
                  dfOpsType={dfOpsType}
                />
            </div> :
            <div className="border-2 w-1/3">
              <ChartPlane
                  dataComp={dataComp[compIndex]}
                  setChartComp={setChartComp}
                  chartType={chartType}
              />
            </div>

            )
            
            
          }
        </div>
      </div>

      
    </div>
  )
}

export default App2