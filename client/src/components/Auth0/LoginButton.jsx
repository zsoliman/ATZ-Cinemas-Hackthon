import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../../styles/Global.scss'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
      <div className="auth-page">
        <h2> Login to continue: </h2>
        <button className="auth-button" onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
  )
};

export default LoginButton;