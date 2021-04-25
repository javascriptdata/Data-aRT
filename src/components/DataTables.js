import React from 'react'
import DataTable from './DataTable'

export default function DataTables({datacomp, setCompIndex, setSidePlane,setDataComp}) {
  const remover = (keys) => {
    setDataComp(datacomp.filter((el) => el.keys !==keys));
  }
  return (
    <div>
      {datacomp.map((val,index) => {
        return( 
                <>
                {/* <button onClick={()=> remover(val.keys)} className="bg-red-700 text-white rounded-sm p-2">Delete</button> */}
                <DataTable 
                  key={index} 
                  columns={val.columns} 
                  values={val.values} 
                  setCompIndex={setCompIndex}
                  index={index}
                  setSidePlane={setSidePlane}
                  remover={remover}
                  keys={val.keys}
                />
                </>
                )
      })}
    </div>
  )
}
