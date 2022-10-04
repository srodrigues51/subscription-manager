import React, { useEffect }  from "react";
import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

function Private({ Component }) {

    const { token } = useContext(AuthContext);

    return token ? <Component /> : <Navigate to="/login" />
}

export default Private;
