import './App.css';
import React, { useState } from  'react';
import ExcelPage from './Component/ExcelPage';

function App() {
  const [file, setFile] = useState(null)

  return (
    <div className="App">
        <ExcelPage />
    </div>
  );
}

export default App;
