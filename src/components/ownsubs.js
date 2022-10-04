import axios from "axios";
import M from "materialize-css";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";


const OnwSubscription = () => {

    const { token, setToken } = useContext(AuthContext);
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        M.AutoInit();

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        axios.get('http://localhost:8080/subscription', { headers })
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
                    </tr>
                </thead>
                <tbody>
                    {
                        subscriptions.map(sub => (
                            <tr>
                                <td>{sub.name}</td>
                                <td>{sub.dueDate}</td>
                                <td>{sub.value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default OnwSubscription;