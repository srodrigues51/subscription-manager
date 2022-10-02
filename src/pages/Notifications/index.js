import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';

function Notifications() {
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
            <li className="tab col s3"><a href="#recived" className="black-text">Recebidas</a></li>
            <li className="tab col s3"><a href="#enviadas" className="black-text">Enviadas</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Notifications;