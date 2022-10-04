import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';
import M from "materialize-css";

function Payments() {

  const { token, setToken } = useContext(AuthContext);
  const [payments, setProfile] = useState({});

  useEffect(() => {
    M.AutoInit();

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    axios.get('http://localhost:8080/user', { headers })
        .then(res => setProfile(res.data))
        .catch(error => console.error(error));
}, []);

  return (
    <>
      <Navbar/>
      <Sidebar />
      <br></br>
      <br></br>
      <div className="container row">
        <h3 className="title">PAGAMENTOS</h3>
      </div>
      <div className="container row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#test1" className="black-text">Pagamentos a Receber</a></li>
            <li className="tab col s3"><a href="#test2" className="black-text">Pagamentos Recebidos</a></li>
          </ul>
          <div id="test1" class="col s12">
            <span>Assinatura: </span>
            <span>{payments.name}</span>
            <br></br>
            <span>Nome: </span>
            <span>{payments.firstName}</span>
          </div>
          <div id="test2" class="col s12">Test 1</div>
        </div>
      </div>
    </>
  );
}

export default Payments;
