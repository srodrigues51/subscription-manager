import axios from "axios";
import M from "materialize-css";
import React, { useState, useEffect, useContext  } from "react";
import { AuthContext } from "../contexts/authContext";


const Subscribed = () => {

    const { token, setToken } = useContext(AuthContext);
    const [subscribed, setSubscribed] = useState([])

    useEffect(() => {
        M.AutoInit();

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        axios.get('http://localhost:8080/subscription/subscribed', { headers })
            .then(res => setSubscribed(res.data))
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
                        subscribed.map(sub => (
                            <tr key={sub.id}>
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
    )

}

export default Subscribed;
