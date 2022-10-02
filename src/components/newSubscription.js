import React, { useState } from "react";
import axios from "axios";

const NewSubscription = () => {

    const initialValue = {
        nameservice: '',
        members: 0,
        periodicity: '',
        price: 0,
        date: '',
        email: '',
        password: '',
    }
    const [values, setValues] = useState(initialValue);
    console.log(values);
    function onChange(e) {
        const { name, value } = e.target;
        // faz a atualização da propriedade 
        setValues({ ...values, [name]: value })
    }
    function onSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/subscription", values)      
            .then((response) => response.text())
            .catch((error ) => console.log(error))
        }
        return (
            <div>
                <h4>PRENCHA OS DADOS SOLICITADOS</h4>
                <br></br>
                <form className="row col s12" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">devices</i>
                            <input id="name_service" name="nameservice" type="text" onChange={onChange} />
                            <label htmlFor="name_service" >Nome do Serviço: </label>
                        </div>
                        <div className="input-field col s5">
                            <i className="material-icons prefix">group_add</i>
                            <input id="members" name="members" type="number" onChange={onChange} />
                            <label htmlFor="members">Quantidade de Membros: </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select id="periodicity" name="periodicity" onChange={onChange}>
                                <option value="" disabled selected></option>
                                <option value="1">Mensal</option>
                                <option value="2">Anual</option>
                            </select>
                            <label htmlFor="periodicity">Plano:</label>
                        </div>
                        <div className="input-field col s5">
                            <i className="material-icons prefix">attach_money</i>
                            <input id="price" type="number" name="price" onChange={onChange} />
                            <label htmlFor="price">Valor: </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 ">
                            <i className="material-icons prefix">event</i>
                            <input id="date_picker" name="date" className="datepicker" onChange={onChange} />
                            <label htmlFor="date_picker" >Data Validade:</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" name="email" onChange={onChange} />
                            <label htmlFor="email">Email: </label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">enhanced_encryption</i>
                            <input id="passwords" name="password" type="password" onChange={onChange} />
                            <label htmlFor="passwords">Senha: </label>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='modal-fixed-footer center'>
                        <button className="modal-close btn waves-effect waves-flat">Voltar</button>
                        <button className="btn waves-effect waves-flat" type="submit" >Cadastrar</button>
                    </div>
                </form>
            </div>
        )

    }
    export default NewSubscription;