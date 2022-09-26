import React, { useEffect } from 'react';
import M from "materialize-css";
import Routes from "./Routes"


function App() {
  
  useEffect(() => {
    M.AutoInit();
  }, [])
  return (
    <Routes />
    
  );
}

export default App;
