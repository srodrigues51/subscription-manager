import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider(props) {

    const [token, setToken] = useState('');
    const value = useMemo(() => ({ token, setToken}), [token, setToken]);

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}
