import React, { useState } from "react";


const NewMember = () => {

    const initialValue = {
        nameservice: '',
        email: '',
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
        fetch('http://localhost:8080/subscription', {
            method: 'POST',
            body: JSON.stringify({
                values,
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
                        <label htmlFor="name_service" >Nome do Streaming: </label>
                    </div>
                    <div className="input-field col s5">
                        <i className="material-icons prefix">group_add</i>
                        <input id="email" name="email" type="email" onChange={onChange} />
                        <label htmlFor="email">Email: </label>
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
export default NewMember;