import React from 'react'

export default function NavBar({Setdisplay}) {
    return (
        <div>
            <nav>
            <li onClick={() => {
            Setdisplay("Chart");
            }}>Chart</li>
            {" "}
            <li onClick={() => {
            Setdisplay("Table");
            }}>Table</li>
        </nav> 
        </div>

       
    )
}
