import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import NewMember from '../../components/newMember';


function User_control() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <br></br>
      <br></br>
      <div className='container row'>
        <h3 className="title">CONTROLE DE USUÁRIOS</h3>
      </div>
      <div className="container row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="membros" className='black-text'>Membros</a></li>
          </ul>
        </div>
        <div id="membros" className="col s12">
          <br></br>
          <br></br>
          <div className='container row col s12'>
            <button data-target="edit" className="btn modal-trigger "><i className="small material-icons">edit</i></button>
            <button data-target="delete" className="btn modal-trigger "><i className="small material-icons">delete</i></button>
            <div id='edit' className='modal center'>
              <br></br>
              <div className='modal-content '>
                <div className="row">
                  <form className="col s12">
                    <h4>Altere os Dados</h4>
                    <div className="row">
                      <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="first_name" type="text" className="validate" />
                        <label for="first_name">Nome</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='modal-fixed-footer center'>
                <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                <button className="btn waves-effect waves-flat" type="submit" name="action">Editar Dados</button>
              </div>
            </div>
            <div id='delete' className='modal '>
              <div className='modal-content'>
                <h3 className='center'>Você Confirma a exclusão do Usuário?</h3>
              </div>
              <div className='modal-fixed-footer center'>
                <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                <button className="btn waves-effect waves-flat" type="submit" name="action">Sim, excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container row">
        <div className='container center'>
          <button data-target="new_service" className="btn-large modal-trigger ">ADICIONAR MEMBRO</button>
        </div>
        <div id="new_member" className="modal modal-fixed-footer center">
          <div id="new_member" className="modal modal-fixed-footer">
            <div className="modal-content">
              <NewMember />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_control;
