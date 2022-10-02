import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

function Home() {

  return (
    <>
      <Navbar/>
      <Sidebar />
      <br></br>
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
