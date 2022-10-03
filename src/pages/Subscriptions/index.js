import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from '../../components/navbar';
import NewSubscription from "../../components/newSubscription";
import axios from "axios";

function Subscriptions() {

  const handleMysubs = async () => {
    axios.get('http://localhost:8080/subscription/:id')
      .then(res => console.log(res.data)).catch(error => console.error(error));
  }
  const handleShare= async () => {
    axios.get('http://localhost:8080/subscription/subscribed')
      .then(res => console.log(res.data)).catch(error => console.error(error));
  }
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
            <li className="tab col s3"><button href="#own" className="btn-large" onClick={handleShare}>Assinaturas</button></li>
            <li className="tab col s3"><button href="#own" className="btn-large" onClick={handleMysubs}>Minhas Assinaturas</button></li>
          </ul>
        </div>
        <div id="own" className="col s12"> 
          <br></br>
          <br></br>
          <div className='container center'>
            <button data-target="new_service" className="btn-large modal-trigger ">ADICIONAR NOVO SERVIÇO</button>
          </div>
          <div id="new_service" className="modal modal-fixed-footer">
            <div className="modal-content">
              <NewSubscription />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Subscriptions;
