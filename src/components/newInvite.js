//import axios from "axios";
//import React, { useState, useEffect } from "react";
//import M from "materialize-css";

const NewInvite = () =>{

    /*const [subID, setSubID] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        M.AutoInit();
    }, []);

    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/subscription')
            .then(res => setSubscriptions(res.data))
            .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome Serviço</th>
                        <th>Data Validade</th>
                        <th>Valor R$</th>
                        <th>Administrador</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subscriptions.map(sub => (
                            <tr>
                                <td>{sub.name}</td>
                                <td>{sub.dueDate}</td>
                                <td>{sub.value}</td>
                                <td>{sub.user}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )*/
    return(
        <div></div>
    )
}

export default NewInvite;