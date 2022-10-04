import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';
import M from "materialize-css";

function Payments() {

  const { token, setToken } = useContext(AuthContext);
  const [payments, setRecieve] = useState({});
  const [toPay, setProfile] = useState({});

  useEffect(() => {
    M.AutoInit();

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    axios.get('http://localhost:8080/user', { headers })
        .then(res => setRecieve(res.data))
        .catch(error => console.error(error))

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
            <li className="tab col s3"><a href="#torecieve" className="black-text">Pagamentos a Receber</a></li>
            <li className="tab col s3"><a href="#payd" className="black-text">Pagamentos a Fazer</a></li>
          </ul>

          <div id="torecieve" class="col s12">
            <br></br>
            <br></br>
            <span>Assinatura: </span>
            <span>{payments.name}</span>
            <br></br>
            <br></br>
            <span>Nome: </span>
            <span>{payments.firstName}</span>
            <br></br>
            <br></br>
            <span>Periodicidade: </span>
            <span>{payments.periodicity}</span>
            <br></br>
            <br></br>
            <span>Valor: </span>
            <span>{payments.value}</span>
          </div>

          <div id="payd" class="col s12">
            <br></br>
            <br></br>
            <span>Assinatura: </span>
            <span>{toPay.name}</span>
            <br></br>
            <br></br>
            <span>Nome: </span>
            <span>{toPay.firstName}</span>
            <br></br>
            <br></br>
            <span>Periodicidade: </span>
            <span>{toPay.periodicity}</span>
            <br></br>
            <br></br>
            <span>Valor: </span>
            <span>{toPay.value}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;
