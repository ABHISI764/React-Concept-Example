Q. Context Api
Ans. Context Api helps when there is a need for sharing
 state between a lot of nested components. 
 * Component A create context like this 
 export const LoginContext = createContext();
 then export

 * Second use Provider
  <LoginContext.Provider value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}>
                <ComponentB />
 </LoginContext.Provider>

 * then nested compoenent c import context
 import { LoginContext } from './ComponentA' 
 and then use like this 
const { isLoggedIn, onLogin, onLogout } = useContext(LoginContext)

