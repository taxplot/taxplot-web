import React from "react";
import Layout from "../components/Layout";
import { navigate } from 'gatsby';


import { auth, useAuth } from "gatsby-theme-firebase";


const UserPage = () => {
  const { isLoggedIn, profile } = useAuth()


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