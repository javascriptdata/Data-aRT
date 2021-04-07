import React, { useState } from 'react';
import DataTable from './components/DataTable';
import NavBar from './components/DataTable';
function App2() {
  const [file, setFile ] = useState()

  const changeHandler = function(event) {
      const content = event.target.files[0]
      const reader = new FileReader();
      reader.onload = function (t) {
        const data = t.target.result;

        setFile(data.split("\n"));
      }
      reader.readAsText(content);
  }
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      { file && <DataTable datain={file} /> }
    </div>
  )
}

export default App2