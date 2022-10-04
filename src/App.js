import React from 'react';
import Routes from "./Routes"
import { AuthProvider } from './contexts/authContext';

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
