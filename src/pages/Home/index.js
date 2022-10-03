import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';


function Home() {

  const { token, setToken } = useContext(AuthContext);
  console.log('jwtToken', token);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='container row'>
        <p className=""> Descubra o que estão compartilhando</p>
      </div>
      <br></br>
      <br></br>
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