import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

function Payments() {
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
            <li className="tab col s3"><a href=" " className="black-text">Contas à Pagar</a></li>
            <li className="tab col s3"><a href=" " className="black-text">Pagamentos Recebidos</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Payments;
