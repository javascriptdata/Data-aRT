import React from "react";

export default function Chart({data}) {
  return(
    
     <div>
        <h1>{data.type}</h1>

       {data.dataset}
     </div>
     )
}
