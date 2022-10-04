import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';
import M from "materialize-css";

function Profile() {

    const { token, setToken } = useContext(AuthContext);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        M.AutoInit();

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        axios.get('http://localhost:8080/user', { headers })
            .then(res => setProfile(res.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Navbar />
            <Sidebar />
            <br></br>
            <br></br>
            <div className='container row'>
                <ul className="collection with-header">
                    <li className="collection-header"><h3>Perfil</h3></li>
                    <li className="collection-item">
                        <h5>Nome:</h5>
                        <p>{profile.fullName}</p>
                    </li>
                    <li className="collection-item">
                        <h5>E-mail:</h5>
                        <p>{profile.email}</p>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Profile;
