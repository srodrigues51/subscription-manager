import React from 'react';

function Register() {
  return (
    <div class="container">
      <form>
        <label>Seu e-mail</label>
        <input type="text" id="remail" name="remail"></input>
        <label>Informe seu nome</label>
        <input type="text" id="rfname" name="rfname"></input>
        <label>Agora seu sobrenome</label>
        <input type="text" id="rlname" name="rlname"></input>
        <label>Crie uma senha</label>
        <input type="text" id="password" name="password"></input>
        <label>Confirme sua senha</label>
        <input type="text" id="cpassword" name="cpassword"></input>
      </form>
      <button type="submit" class="waves-effect waves-light btn"> Cadastrar </button>
  </div>
  );
}

export default Register;
