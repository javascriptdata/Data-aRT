import React from "react";
import ReactTable from 'react-table-v6'
import Draggable from 'react-draggable';
import 'react-table-v6/react-table.css'

function DataTable({ datain }) {
  const header = datain[0].split(",");
  const columns = header.map((val, index) => {
    return { Header: val, 
      accessor: val,
      Cell: (props) => (
        <div className={val || ''}>
          <span>{props.value}</span>
        </div>
      ),
      width:
        index === 0 && (1280 * 0.8333 - 30) / header.length < 130
          ? 130
          : undefined,
    }
  });

  const data = datain.slice(1,10).map(val =>{
    let rows_data = {}
    let row_data = val.split(",");
    
    row_data.forEach((val2, index) => {
      let col = header[index];
      rows_data[col] = val2;
    })
    return rows_data;
  })
  
  return (
    <Draggable >
        <div className="w-1/2">
        <ReactTable
          data={data}
          columns={columns}
          getTheadThProps={() => {
            return { style: { wordWrap: 'break-word', whiteSpace: 'initial' } }
          }}
          showPageJump={false}
          showPagination={false}
          defaultPageSize={10}
          showPageSizeOptions={false}
          minRows={10}
        />
    </div>
    </Draggable>
  )
    
    
}

export default DataTable
