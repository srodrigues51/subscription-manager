import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

function Login() {

  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    axios.post('http://localhost:8080/auth/login', { email, password })
      .then(res => {
        setToken(res.data.jwtToken);
        navigate("/home");
      }).catch(error => console.error(error));
  }

  useEffect(() => {
    if (token) {
      navigate("/home")
    }
  }, [token, navigate]);

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
      <div className="container">
        <p>Faca seu login</p>
        <form>
          <label>Informe seu e-mail</label>
          <input type="text" id="lemail" name="lemail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Informe sua senha</label>
          <input type="password" id="lpassword" name="lpassword" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button className="waves-effect waves-light btn" onClick={handleLogin}> Login </button>
      </div>
    </div>

  );
}

export default Login;
