import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar'

function Home() {

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
                <li className="divider" tabindex="-1"></li>
                <li><Link to='/'>Sair</Link></li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
      <Sidebar />
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <Link to='/subscripition'>Ver Meus Streamings</Link>
              <Link to='/users'>Ver Usuários</Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
