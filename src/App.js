import React, { Fragment, useEffect } from 'react';
import Body from "./pages/Initialpage/Body";
import Navbar from "./pages/Initialpage/Navbar";
import M from "materialize-css";

function App() {
  useEffect (()=> {
    M.AutoInit();
  }, [])
  return (
    <Fragment>
      <Navbar/>
      <Body />
    </Fragment>
  );
}

export default App;
