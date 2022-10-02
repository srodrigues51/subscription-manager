import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Register() {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [myEmail, setEmail] = useState('');
  const [myPassword, setPassword] = useState('');
  const [confirmPassword, setCPassword] = useState('');

  const handleClick = async () => {
    console.log("Submit", { fName, lName, myEmail, myPassword })
    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        email: myEmail,
        password: myPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
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
          <input type="text" id="remail" name="remail" value={myEmail} onChange={(e) => setEmail(e.target.value)}></input>
          <label>Informe seu nome</label>
          <input type="text" id="rfname" name="rfname" value={fName} onChange={(e) => setfName(e.target.value)}></input>
          <label>Agora seu sobrenome</label>
          <input type="text" id="rlname" name="rlname" value={lName} onChange={(e) => setlName(e.target.value)}></input>
          <label>Crie uma senha</label>
          <input type="password" id="password" name="password" value={confirmPassword} onChange={(e) => setCPassword(e.target.value)}></input>
          <label>Confirme sua senha</label>
          <input type="password" id="cpassword" name="cpassword" value={myPassword} onChange={(e) => setPassword(e.target.value)}></input>
        </form>
        <button type="submit" className="waves-effect waves-light btn" onClick={handleClick}><Link to="/login">Cadastrar</Link></button>
      </div>
    </div>

  );
}

export default Register;
