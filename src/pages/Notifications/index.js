import React from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';


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
            <li className="tab col s3"><button className="btn-large" onClick={handleReceived}>Recebidas</button></li>
            <li className="tab col s3"><button className="btn-large" onClick={handleSend}>Enviadas</button></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Notifications;