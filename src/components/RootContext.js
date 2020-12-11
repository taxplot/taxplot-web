import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useAuth } from "gatsby-theme-firebase";

const GlobalContext = React.createContext({prezMode:false})

const RootContext = (props) => {
    const { isLoggedIn } = useAuth()
    const [ prezButton, setPrezButton ] = useState(false)
    useHotkeys('ctrl+8', () => {
        setPrezButton( true )
    })

    useHotkeys('esc', () => {
        setPrezButton( false )
    })

    
    const prezMode = (prezButton && isLoggedIn)
    
    return <GlobalContext.Provider value={{prezMode:prezMode}} > {props.children} </GlobalContext.Provider>
    
    
}

export default RootContext

export { GlobalContext }