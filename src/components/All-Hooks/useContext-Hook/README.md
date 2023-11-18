1. import createContext
2. create createContext like this  export const UserContext = createContext()
3. use the Context Provider to wrap the tree of components like 
  <!-- <UserContext.Provider value={user}>
    <UseContextExample />
  </UserContext.Provider> -->
4. Use the useContext Hook import constext from folder import { UserContext } from '../../../App'
5. access the user context  const user = useContext(UserContext);