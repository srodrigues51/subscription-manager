import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';
import M from "materialize-css";
import axios from "axios";
import { AuthContext } from '../../contexts/authContext';

function Invites() {

  const { token } = useContext(AuthContext);
  const [sentInvites, setSentInvites] = useState([]);
  const [receivedInvites, setReceivedInvites] = useState([]);

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const loadSentInvites = () => {
    axios.get('http://localhost:8080/invite/sent', { headers })
      .then(res => setSentInvites(res.data))
      .catch(error => console.error(error))
  }

  const loadReceivedInvites = () => {
    axios.get('http://localhost:8080/invite/received', { headers })
      .then(res => setReceivedInvites(res.data))
      .catch(error => console.error(error))
  }

  const acceptInvite = async (id) => {
    await axios.put(`http://localhost:8080/invite/accept/${id}`, {}, { headers })
      .then(res => console.log(res.data))
      .catch(error => console.error(error));

    loadReceivedInvites();
  }

  const rejectInvite = async (id) => {
    await axios.put(`http://localhost:8080/invite/reject/${id}`, {}, { headers })
      .then(res => console.log(res.data))
      .catch(error => console.error(error));

    loadReceivedInvites();
  }

  useEffect(() => {
    M.AutoInit();
    loadSentInvites();
    loadReceivedInvites();
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
            <li className="tab col s3"><a href="#received-invites" className="black-text">Recebidos</a></li>
            <li className="tab col s3"><a href="#sent-invites" className="black-text">Enviados</a></li>
          </ul>

          <div id="received-invites" className="col s12">
            <br></br>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Assinatura</th>
                        <th>Proprietário</th>
                        <th>Periodicidade</th>
                        <th>Valor Total R$</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {
                        receivedInvites.map(inv => (
                            <tr key={inv.id}>
                                <td>{inv.subscription.name}</td>
                                <td>{inv.ownerEmail}</td>
                                <td>{inv.subscription.periodicity}</td>
                                <td>{inv.subscription.value}</td>
                                <td>{inv.status}</td>
                                <td>
                                  <button className="waves-effect green btn-small" disabled={inv.status !== 'PENDING'} onClick={() => acceptInvite(inv.id)}>Aceitar</button>
                                  <span style={{ marginRight: '5px' }}></span>
                                  <button className="waves-effect red btn-small" disabled={inv.status !== 'PENDING'} onClick={() => rejectInvite(inv.id)}>Recusar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
          </div>

          <div id="sent-invites" className="col s12">
            <br></br>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Assinatura</th>
                        <th>Usuário</th>
                        <th>Periodicidade</th>
                        <th>Valor Total R$</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                        sentInvites.map(inv => (
                            <tr key={inv.id}>
                                <td>{inv.subscription.name}</td>
                                <td>{inv.email}</td>
                                <td>{inv.subscription.periodicity}</td>
                                <td>{inv.subscription.value}</td>
                                <td>{inv.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invites;