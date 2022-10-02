import React, { useEffect } from 'react';
import M from "materialize-css";
import Routes from "./Routes"
import { AuthProvider } from './contexts/authContext';


function App() {
  
  useEffect(() => {
    M.AutoInit();
  }, [])
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
