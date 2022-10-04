import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Register() {

  const [firstName, setfName] = useState('');
  const [lastName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    console.log("Submit axios", { firstName, lastName, email, password })
    axios.post('http://localhost:8080/auth/register', { firstName, lastName, email, password })
      .then(res => res.data).catch(error => console.error(error));
  }


  return (
    <div className='nav-bar-fixed'>
      <nav className='nav-container'>
        <div className='nav-wrapper blue'>
          <a id="brand-logo" href=" " className='brand-logo center'> Subscription Manager</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li><Link to="/login">Entrar</Link></li>
          </ul>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Voltar</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <form>
          <label>Seu e-mail</label>
          <input type="email" id="remail" name="remail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <label>Informe seu nome</label>
          <input type="text" id="rfname" name="rfname" value={firstName} onChange={(e) => setfName(e.target.value)}></input>
          <label>Agora seu sobrenome</label>
          <input type="text" id="rlastName" name="rlastName" value={lastName} onChange={(e) => setlName(e.target.value)}></input>
          <label>Crie uma senha</label>
          <input type="password" id="cpassword" name="cpassword" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </form>
        <button className="waves-effect waves-light btn register" onClick={handleRegister}><Link to="/login" className='white-text'>Cadastrar</Link></button>
      </div>
    </div>

  );
}

export default Register;
