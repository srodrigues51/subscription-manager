import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';

function User_control() {
  return (
    <>
      <div className='nav-bar-fixed blue'>
        <nav>
          <div className='nav-wrapper blue'>
            <a id="brand-logo" href=" " className='brand-logo center '> Subscription Manager</a>
            <a href="#!" className='sidenav-trigger show-on-large' data-target='slide-out'><i className='medium material-icons white-text'>menu</i></a>
            <ul id="navbar-items" className="right hide-on-med-and-down">
              <li><a href='#!' className='dropdown-trigger' data-target='dropdown1'><i className="large material-icons ">account_circle</i></a></li>
              <ul id='dropdown1' className='dropdown-content container'>
                <li><Link to='/profile'>Perfil</Link></li>
                <li className="divider" tabindex="-1"></li>
                <li><Link to='/'>Sair</Link></li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
      <Sidebar />
      <br></br>
      <br></br>
      <div className='container row'>
        <h3 className="title"> Página de Membros</h3>
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
          <div className="container">
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Serviço compartilhado</th>
                    <th>Valor R$</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
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
                                  <input id="first_name" type="text" className="validate"/>
                                  <label for="first_name">Nome</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="input-field col s6">
                                  <i className="material-icons prefix">email</i>
                                  <input id="email" type="email" className="validate"/>
                                  <label for="email">Email</label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className='modal-fixed-footer center'>
                          <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                          <button className="btn waves-effect waves-flat" type="submit" name="action">Editar Membro</button>
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
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='container center'>
        <button id="new_member" data-target="modal1" className="btn-large modal-trigger ">ADICIONAR NOVO MEMBRO</button>
      </div>
    </>
  );
}

export default User_control;
