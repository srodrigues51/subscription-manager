import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';
import M from "materialize-css";
import axios from "axios";
import { AuthContext } from '../../contexts';

function Invites() {

  const { token, setToken } = useContext(AuthContext);
  const [invites, setSent] = useState({});
  const [recive, setRecive] = useState({});

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.get('http://localhost:8080/invite/sent', { headers })
      .then(res => setSent(res.data))
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    axios.get('http://localhost:8080/invite/received', { headers })
      .then(res => setRecive(res.data))
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${token}`
    }

    axios.post('http://localhost:8080/invite/received', { headers })
      .then(res => setRecive(res.data))
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <br></br>
      <br></br>
      <div className="container row">
        <h3 className="title">CONVITES</h3>
      </div>
      <div className="container row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#invites" className="black-text">Recebidos</a></li>
            <li className="tab col s3"><a href="#recive" className="black-text">Enviados</a></li>
          </ul>

          <div id="invites" className="col s12">
            <br></br>
            <br></br>
            <span>Assinatura: </span>
            <span>{invites.name}</span>
            <br></br>
            <br></br>
            <span>Nome: </span>
            <span>{invites.firstName}</span>
            <br></br>
            <br></br>
            <span>Periodicidade: </span>
            <span>{invites.periodicity}</span>
            <br></br>
            <br></br>
            <span>Valor: </span>
            <span>{invites.value}</span>
          </div>

          <div id="recive" className="col s12">
            <br></br>
            <br></br>
            <span>Assinatura: </span>
            <span>{recive.name}</span>
            <br></br>
            <br></br>
            <span>Nome: </span>
            <span>{recive.firstName}</span>
            <br></br>
            <br></br>
            <span>Periodicidade: </span>
            <span>{recive.periodicity}</span>
            <br></br>
            <br></br>
            <span>Valor: </span>
            <span>{recive.value}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invites;