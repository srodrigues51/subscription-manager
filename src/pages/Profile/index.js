import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import axios from 'axios';

function Profile() {

  const handleUserData = async () => {
    axios.get('http://localhost:8080/user')
      .then(res => console.log(res.data)).catch(error => console.error(error));
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <br></br>
      <br></br>
      <div className='container row'>
        <h3 className="title">PERFIL  </h3>
      </div>
      <div className='container row'><button className='btn-large' onClick={handleUserData}>Ver Dados do Perfil</button></div>
    </>
  );
}

export default Profile;
