import React, {useState, createContext} from "react"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

export const InitialUserState = {
  loggedIn: false,
  uid: "none",
  displayName: "Anonymous",
}

const UserContext = ({ children }) => {
  const [userState, setUserState] = useState(InitialUserState)
  return (
    <GlobalStateContext.Provider value={{userState, setUserState}}>
       {children}
    </GlobalStateContext.Provider>
  )
}

export default UserContext