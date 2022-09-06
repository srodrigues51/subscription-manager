import React from 'react';
import { Link } from 'react-router-dom';


function Initialpage() {
  return (
    <>
      <div className='container'>
        <br>
        </br>
        <div clasName='row center' >
          <h5 className='header col s12 light'>Cansado de não ter onde assistir seus filmes e séries favoritas? Cadastre-se agora !</h5>
        </div>
        <div className='row center'>
          <Link to="/register" className="waves-effect waves-light btn">Cadastrar Gratuitamente</Link>
        </div>
        <br>
        </br>
      </div>
    </>
  );
}

export default Initialpage;