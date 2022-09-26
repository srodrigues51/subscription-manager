import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", { email, password })
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
        <form onSubmit={handleSubmit}>
          <label>Informe seu e-mail</label>
          <input type="text" id="lemail" name="lemail" value={email} onCahnce={(e) => setEmail(e.target.value)} />
          <label>Informe sua senha</label>
          <input type="text" id="lpassword" name="lpassword" value={password} onCahnce={(e) => setPassword(e.target.value)} />
        </form>
        <button className="waves-effect waves-light btn"> Login </button>
      </div>
    </div>

  );
}

export default Login;
