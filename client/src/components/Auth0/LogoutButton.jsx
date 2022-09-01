import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../../styles/Global.scss'


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <span className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
      ❌
    </span>
  );
};

export default LogoutButton;