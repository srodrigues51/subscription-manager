import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { AuthContext } from '../../contexts/authContext';


function Home() {

  const { token, setToken } = useContext(AuthContext);

  console.log('jwtToken', token);

  return (
    <>
      <div className='nav-bar-fixed blue'>
        <nav>
          <div className='nav-wrapper blue'>
            <a id="brand-logo" href=" " className='brand-logo center '> Subscription Manager</a>
            <a href="#!" className='sidenav-trigger show-on-large' data-target='slide-out'><i className='medium material-icons white-text'>menu</i></a>
            <ul id="navbar-items" className="right hide-on-med-and-down">
              <li><a href='#!' className='dropdown-trigger' data-target='dropdown1'><i className="large material-icons ">account_circle</i></a></li>
              <ul id='dropdown1' className='dropdown-content container'>
                <li><Link to='/profile'>Perfil</Link></li>
                <li className="divider" tabIndex="-1"></li>
                <li><Link to='/'>Sair</Link></li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
      <Sidebar />
      <div className='container row'>
        <p className=""> Descubra o que estão compartilhando</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='card center col s12 m6 l3 offset-l1 card-panel teal lighten-1'>
            <i className="center large material-icons">account_circle</i>
            <div className="card-content white-text">
                <p>Spotify
                  <br></br>
                  Por apenas R$ 9,90
                </p>
            </div>
            <li className="divider ligth-black" tabIndex="0"></li>
            <div className="card-action">
              <a href="#!" className=' white-text'>Assinar</a>
            </div>
          </div>
          <div className='card center col s12 m6 l3 offset-l1 card-panel teal lighten-1'>
            <i className="center large material-icons">account_circle</i>
            <div className="card-content white-text">
                <p>Netflix
                  <br></br>
                  Por apenas R$ 9,90
                </p>
            </div>
            <li className="divider ligth-black" tabIndex="0"></li>
            <div className="card-action">
              <a href="#!" className=' white-text'>Assinar</a>
            </div>
          </div>
          <div className='card center col s12 m6 l3 offset-l1 card-panel teal lighten-1'>
            <i className="center large material-icons">account_circle</i>
            <div className="card-content white-text">
                <p>Amazon Prime
                  <br></br>
                  Por apenas R$ 9,90
                </p>
            </div>
            <li className="divider ligth-black" tabIndex="0"></li>
            <div className="card-action">
              <a href="#!" className=' white-text'>Assinar</a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='center'>
        <button className="waves-effect waves-light btn-large"> <Link to='/subscripition' className='white-text'>Consultar Serviços</Link></button>
      </div>
      <br></br>
      <br></br>
      <div className='center'>
        <button className="waves-effect waves-light btn-large "> <Link to='/users' className='white-text'>Consultar Membros</Link></button>
      </div>
    </>

  );
}

export default Home;
