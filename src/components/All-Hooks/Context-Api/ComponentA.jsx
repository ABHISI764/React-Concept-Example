import React,{ useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const LoginContext = createContext();

function ComponentA() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        console.log("checking Login");
        setLoggedIn(true);
    };

    const handleLogout = () => {
        console.log("checking logout");
        setLoggedIn(false);
    };

    return (
        <div>
            <LoginContext.Provider value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}>
                <ComponentB />
            </LoginContext.Provider>
        </div>
    )
}

export default ComponentA