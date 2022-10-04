import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';
import M from "materialize-css";

function Payments() {

  const { token } = useContext(AuthContext);
  const [paymentsToReceive, setPaymentsToReceive] = useState([]);
  const [paymentsToPay, setPaymentsToPay] = useState([]);

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const loadPaymentsToReceive = () => {
    axios.get('http://localhost:8080/payment/receive', { headers })
        .then(res => setPaymentsToReceive(res.data))
        .catch(error => console.error(error));
  }

  const loadPaymentsToPay = () => {
    axios.get('http://localhost:8080/payment/pay', { headers })
        .then(res => setPaymentsToPay(res.data))
        .catch(error => console.error(error));
  }

  const handlePayPayment= async (paymentId) => {
    await axios.put('http://localhost:8080/payment', { paymentId, status: 'PAID' }, { headers })
      .then(res => console.log(res.data))
      .catch(error => console.error(error));

    loadPaymentsToReceive();
  };

  useEffect(() => {
    M.AutoInit();
    loadPaymentsToReceive();
    loadPaymentsToPay();
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
            <li className="tab col s3"><a href="#topay" className="black-text">Pagamentos a Fazer</a></li>
          </ul>

          <div id="torecieve" class="col s12">
            <br></br>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Assinatura</th>
                        <th>Assinante</th>
                        <th>Periodicidade</th>
                        <th>Valor R$</th>
                        <th>Período</th>
                        <th>Data de Vencimento</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                        paymentsToReceive.map(pay => (
                            <tr key={pay.id}>
                                <td>{pay.subscription.name}</td>
                                <td>{pay.subscriber.user.email}</td>
                                <td>{pay.periodicity}</td>
                                <td>{pay.value}</td>
                                <td>{pay.referencePeriod}</td>
                                <td>{pay.dueDate}</td>
                                <td><button className='btn light-green' onClick={() => handlePayPayment(pay.id)}>Marcar como pago</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
          </div>

          <div id="topay" class="col s12">
            <br></br>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Assinatura</th>
                        <th>Periodicidade</th>
                        <th>Valor R$</th>
                        <th>Período</th>
                        <th>Data de Vencimento</th>
                    </tr>
                </thead>
                <tbody>
                {
                        paymentsToPay.map(pay => (
                            <tr key={pay.id}>
                                <td>{pay.subscription.name}</td>
                                <td>{pay.periodicity}</td>
                                <td>{pay.value}</td>
                                <td>{pay.referencePeriod}</td>
                                <td>{pay.dueDate}</td>
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

export default Payments;
