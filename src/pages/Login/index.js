import React from 'react';


function Login() {
  return (
    <div class="container">
      <p>Faca seu login</p>
       <form>
        <label>Informe seu e-mail</label>
        <input type="text" id="lemail" name="lemail"></input>
        <label>Informe sua senha</label>
        <input type="text" id="lpassword" name="lpassword"></input>
      </form>
      <button class="waves-effect waves-light btn"> Login </button>
    </div>
  );
}

export default Login;
