import React, { useContext } from 'react'

import { LoginContext } from './ComponentA' 

const ComponentC =() => {
    const { isLoggedIn, onLogin, onLogout } = useContext(LoginContext)

    return (
        <div>
            <h1>User Profile from compoenent C</h1>
            {isLoggedIn ? (
                 <div>
                 <p>Please Log in</p>
                 <button onClick={onLogout}>Logout</button>
             </div>
              ) : (
                <div>
                <p>Welcome User </p>
                <button onClick={onLogin}>Login</button>
            </div>
            )}
        </div>
    )
}

export default ComponentC