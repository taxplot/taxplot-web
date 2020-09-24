import React, { useContext, useEffect } from "react";
import { GlobalStateContext } from '../components/UserContext'
import Layout from "../components/Layout";
import { navigate } from 'gatsby';


import { auth, useAuth } from "gatsby-theme-firebase";


const UserPage = () => {
    const { isLoggedIn, profile } = useAuth()
  //const { userState } = useContext(GlobalStateContext)

//   useEffect(() => {
//     if (userState.loggedIn) {
      
//     }
//     else {
      
//     }
//   }, [userState]);


//   function AdminButton() {

//   }
  
  const something = "something something something"

  return (
    <Layout>
        <div style={{ marginTop: "100px" }}>
          <h1>{isLoggedIn?profile.displayName:"You aren't logged in"}</h1>
          <button 
            onClick={() => auth.signOut()}
          >
          Sign Out
          </button>
        </div>
    </Layout>
  );
}

export default UserPage;