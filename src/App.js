import React, { useEffect } from 'react';
import M from "materialize-css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Initial from './pages/Initial_page';
import Register from './pages/Register_page';
import About from './pages/About';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, [])
  return (
    <Router>
      <nav className='nav-container'>
        <div className='nav-wrapper blue'>
          <a id="brand-logo" href=" " className='brand-logo center'> Subscription Manager</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/about">
                Sobre
              </Link>
             
            </li>
            <li><Link to="/login">Entrar</Link></li>
          </ul>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><Link to="/">Voltar</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path='/' element={<Initial/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/registration' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
