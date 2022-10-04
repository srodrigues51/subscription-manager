import axios from "axios";
import React, { useState } from "react";


const NewInvite = () => {

    const [subscriptionId, setUser] = useState('');
    const [email, setPassword] = useState('');

    const handleSUB = async () => {

        axios.post('http://localhost:8080/invite', {subscriptionId, email})
            .then(res => console.log(res.data)).catch(error => console.error(error));
    }


    return (
        <div>
            <h4>PRENCHA OS DADOS SOLICITADOS</h4>
            <br></br>
            <form clas="row col s12" >
                <div clas="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">devices</i>
                        <input id="name_service" name="nameservice" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="name_service" >Nome do Serviço: </label>
                    </div>
                    <div className="input-field col s5">
                        <i className="material-icons prefix">group_add</i>
                        <input id="members" name="members" type="number" value={slots} onChange={(e) => setSlots(e.target.value)} />
                        <label htmlFor="members">Quantidade de Membros: </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select id="periodicity" name="periodicity" value={periodicity} onChange={(e) => setPeriodicity(e.target.value)}>
                            <option value="" disabled selected></option>
                            <option value="1">Mensal</option>
                            <option value="2">Anual</option>
                        </select>
                        <label htmlFor="periodicity">Plano:</label>
                    </div>
                    <div className="input-field col s5">
                        <i className="material-icons prefix">attach_money</i>
                        <input id="price" type="number" name="price" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="price">Valor: </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4 ">
                        <i className="material-icons prefix">event</i>
                        <input id="date" name="date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                        <label htmlFor="date_picker" >Data Validade:</label>
                    </div>
                </div>
                <div className="input-field col s6">
                    <select id="credentialType" name="credentialType" value={credentialType} onChange={(e) => setCredentialType(e.target.value)}>
                        <option value="" disabled selected></option>
                        <option value="INVITE">CONVITE</option>
                        <option value="USER_AND_PASSWORD">CREDENCIAIS</option>
                    </select>
                    <label htmlFor="credentialType">Tipo de Credencial:</label>
                    {credentialType === "USER_AND_PASSWORD" ? 
                        <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" name="email" value={user} onChange={(e) => setUser(e.target.value)} />
                            <label htmlFor="email">Email: </label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">enhanced_encryption</i>
                            <input id="passwords" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="passwords">Senha: </label>
                        </div> : <div></div>
                    </div> : <div></div>}

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='modal-fixed-footer center'>
                    <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                    <button className="btn waves-effect waves-flat" onClick={handleSUB} >Enviar Convite</button>
                </div>
            </form>
        </div>
    )

}
export default NewInvite;