import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [myEmail, setEmail] = useState('');
  const [myPassword, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Submit", { myEmail, myPassword })
    fetch('http://localhost:8080/auth/login', {
      method: 'GET',
      body: JSON.stringify({
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
            <li><Link to="/">Voltar</Link> </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <p>Faca seu login</p>
        <form>
          <label>Informe seu e-mail</label>
          <input type="email" id="lemail" name="lemail" value={myEmail} onChange={(e) => setEmail(e.target.value)} />
          <label>Informe sua senha</label>
          <input type="password" id="lpassword" name="lpassword" value={myPassword} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button className="waves-effect waves-light btn" onClick={handleClick}> Login </button>
      </div>
    </div>

  );
}

export default Login;
