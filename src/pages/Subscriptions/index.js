import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';
import NewSubscription from "../../components/newSubscription";
import Subscribed from "../../components/subscribed";
import OnwSubs from "../../components/ownsubs"

function Subscriptions() {


  return (
    <>
      <Navbar />
      <Sidebar />
      <br></br>
      <br></br>
      <div className="container row">
        <h3 className="title">ASSINATURAS</h3>
      </div>
      <div className="container row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#share" className="black-text" >Assinaturas</a></li>
            <li className="tab col s3"><a href="#own" className="black-text" >Minhas Assinaturas</a></li>
          </ul>
        </div>
        <div id="own" className="col s12"> 
          <OnwSubs/>
          <br></br>
          <br></br>
          <div className='container center'>
            <a href="#new_service" className="btn-large modal-trigger ">ADICIONAR NOVO SERVIÇO</a>
          </div>
          <div id="new_service" className="modal modal-fixed-footer">
            <div className="modal-content">
              <NewSubscription />
            </div>
          </div>
        </div>
        <div id="share" className="col s12"> 
          <Subscribed/>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}
export default Subscriptions;
