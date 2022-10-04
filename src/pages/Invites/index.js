import React from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';
import NewInvite from '../../components/newInvite'


function Notifications() {

  const handleReceived = async () => {
    axios.get('http://localhost:8080/invite/received')
      .then(res => console.log(res.data)).catch(error => console.error(error));
  }
  const handleSend = async () => {
    axios.get('http://localhost:8080/invite/sent')
      .then(res => console.log(res.data)).catch(error => console.error(error));
  }
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
            <li className="tab col s3"><button className="btn-large" onClick={handleReceived}>Recebidas</button></li>
            <li className="tab col s3"><button className="btn-large" onClick={handleSend}>Enviadas</button></li>
          </ul>
        </div>
        <div className='container'>
          <button data-target="new_invite" className="btn-large modal-trigger ">CONVIDAR MEMBRO</button>
        </div>
        <div id="new_invite" className="modal modal-fixed-footer">
          <div className="modal-content">
            <NewInvite />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;