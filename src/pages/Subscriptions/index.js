import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";

function Subscriptions() {
  return (
    <>
      <div className="nav-bar-fixed blue">
        <nav>
          <div className="nav-wrapper blue">
            <a id="brand-logo" href=" " className="brand-logo center ">
              {" "}
              Subscription Manager
            </a>
            <a
              href="#!"
              className="sidenav-trigger show-on-large"
              data-target="slide-out"
            >
              <i className="medium material-icons white-text">menu</i>
            </a>
            <ul id="navbar-items" className="right hide-on-med-and-down">
              <li>
                <a
                  href="#!"
                  className="dropdown-trigger"
                  data-target="dropdown1"
                >
                  <i className="large material-icons ">account_circle</i>
                </a>
              </li>
              <ul id="dropdown1" className="dropdown-content container">
                <li>
                  <Link to="/profile">Perfil</Link>
                </li>
                <li className="divider" tabindex="-1"></li>
                <li>
                  <Link to="/">Sair</Link>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
      <Sidebar />
      <br></br>
      <br></br>
      <div className="container row">
        <h3 className="title"> Pagina de Assinaturas</h3>
      </div>
      <div className="container row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a href="#share" className="black-text">Serviços</a></li>
            <li className="tab col s3"><a href="#own" className="black-text">Meus Serviços</a></li>
          </ul>
        </div>
        <div id="own" className="col s12">
          <br></br>
          <div className="container">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Serviços Compartilhados</th>
                  <th>Email cadastrado</th>
                  <th>Data Vencimento</th>
                  <th>Valor R$</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spotify</td>
                  <td>teste@gmail.com</td>
                  <td>15/09/2023</td>
                  <td>$0.87</td>
                  <br></br>
                  <div className='container row col s12 '>
                      <button data-target="delete" className="btn modal-trigger "><i className="small material-icons">delete</i></button>
                    <div id='delete' className='modal '>
                      <div className='modal-content'>
                        <h3 className='center'>Você Confirma a exclusão do Serviço?</h3>
                      </div>
                      <div className='modal-fixed-footer center'>
                        <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                        <button className="btn waves-effect waves-flat" type="submit" name="action">Excluir</button>
                      </div>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>
            <br></br>
            <div className='container center'>
              <button data-target="new_service" className="btn-large modal-trigger ">ADICIONAR NOVO Serviço</button>
            </div>
            <div id="new_service" className="modal">
              <div className="modal-content">
                <h4>Selecione um Serviço para Compartilhar</h4>
                  <br></br>
                  <ul className="collection">
                    <li className="collection-item list-style none"><div>Spotify<a href="#!" className="secondary-content"><i className="material-icons "><Link to='/spotify'>send</Link></i></a></div></li>
                    <li className="collection-item"><div>Amazon<a href="#!" className="secondary-content"><i className="material-icons "><Link to='/amazon'>send</Link></i></a></div></li>
                    <li className="collection-item"><div>Netflix<a href="#!" className="secondary-content"><i className="material-icons "><Link to='/netflix'>send</Link></i></a></div></li>
                    <li className="collection-item"><div>HBO MAX<a href="#!" className="secondary-content"><i className="material-icons "><Link to='/hbomax'>send</Link></i></a></div></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="share" className="col s12">
          <br></br>
          <div className="container">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Serviços Compartilhados</th>
                  <th>Administrador</th>
                  <th>Valor R$</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spotify</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <br></br>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscriptions;
