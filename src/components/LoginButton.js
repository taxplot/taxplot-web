import React, { useContext, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { auth, useAuth } from "gatsby-theme-firebase";
import { Link } from 'gatsby'
import {
  InitialUserState,
  GlobalStateContext,
} from "./UserContext"
import { makeStyles } from "@material-ui/core/styles";


function LoginButton() {
  const { isLoggedIn, profile } = useAuth()
  // const {userState, setUserState} = useContext(GlobalStateContext)

  // useEffect( () => {
  //   if (isLoggedIn) {
  //     setUserState({ 
  //       ...userState,
  //       loggedIn: true,
  //       uid: profile.uid,
  //       displayName: profile.displayName
  //     })
  //   }
  //   else {
  //     setUserState(InitialUserState)
  //   }
  // },
  // [isLoggedIn])

  let authnav
  //if (isLoggedIn) {
  if(false) {
    // authnav = <Link to="/user"><Button
    // >{profile.displayName}</Button></Link>
  }
  else {
    authnav = <Link to="/login"><Button>login</Button></Link>
  }
  return authnav
}
  
export default LoginButton;