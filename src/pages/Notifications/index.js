import React, { useEffect, useState, useContext}from "react";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';
import M from "materialize-css";
import axios from "axios";
import { AuthContext } from '../../contexts/authContext';

function Notifications() {

  const { token, setToken } = useContext(AuthContext);
  const [payments, setRecieve] = useState({});

  useEffect(() => {
    M.AutoInit();

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    axios.get('http://localhost:8080/notificacion', { headers })
        .then(res => setRecieve(res.data))
        .catch(error => console.error(error))

        .then(res => setRecieve(res.data))
        .catch(error => console.error(error));
}, []);

  return (
    <>
      <Navbar/>
      <Sidebar />
      <br></br>
      <br></br>
      <div className="container row">
        <h3 className="title">NOTIFICAÇÕES</h3>
      </div>
      <div className="container row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#recive" className="black-text">Notificações Recebidas</a></li>
          </ul>

          <div id="recive" class="col s12">
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

        </div>
      </div>
    </>
  );
}

export default Notifications;