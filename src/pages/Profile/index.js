import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

function Profile() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <br></br>
      <br></br>
      <div className='container row'>
        <h3 className="title">PERFIL  </h3>
      </div>
      <div></div>
      <div className="container row">
        <div className='container center'>
          <button data-target="new_service" className="btn-large modal-trigger ">ALTERAR DADOS DO PERFIL</button>
        </div>
        <div id="new_service" className="modal modal-fixed-footer center">
          <div className="modal-content">
            <h4>ALTERE SEUS DADOS</h4>
            <br></br>
            <form className="row col s12" >
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="first_name" name="first_name" type="text"  />
                  <label htmlFor="first_name" >Nome: </label>
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="midle_name" name="midle_name" type="text"  />
                  <label htmlFor="midle_name" >Sobrenome </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">email</i>
                  <input id="email" type="email" name="email" />
                  <label htmlFor="email">Email: </label>
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix">enhanced_encryption</i>
                  <input id="passwords" name="password" type="password"  />
                  <label htmlFor="passwords">Senha: </label>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className='modal-fixed-footer center'>
                <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                <button className="btn waves-effect waves-flat" type="submit" >Alterar Dados</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
