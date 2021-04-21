import React, { useState } from 'react';
import DataTables from './components/DataTables';
import { Df2df } from './components/SidePlanes'
import { read_csv } from 'danfojs/src/io/reader'

function App2() {
  // console.log(tf)
  const [file, setFile ] = useState()
  const [dataComp, setDataComp] = useState([])
  const [showSidePlane, setSidePlane] = useState(false)
  const [compIndex, setCompIndex] = useState()

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

  return (
    <div className="max-w-full mx-auto border-2 mt-10">
      <div className="flex flex-col">
        <div className="border-2 w-1/2 mb-10">
          <input type="file" name="file" onChange={changeHandler} />
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
            </div>
            
          </div>
          {showSidePlane && 
            <div className="border-2 w-1/3">
              <Df2df 
                dataComp={dataComp[compIndex]} 
                dataComps={dataComp}
                df_index={compIndex}
                setDataComp={setDataComp}
               />
            </div>
            
          }
        </div>
      </div>

      
    </div>
  )
}

export default App2