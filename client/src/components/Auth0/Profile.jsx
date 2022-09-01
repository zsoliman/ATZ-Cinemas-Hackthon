import React from "react";
import Header from "../../sub-components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate()

  if (isLoading) {
    return <div><Header /> <div className="header-profile" style={{ top: '1em', right: '1em' }}><span> Loading...</span>  </div> </div>;
  }


  return (
    <div className="header-container">
      <Header />
      {isAuthenticated && (
        <div className="header-profile">
          <img style={{ height: "7vh", width: "7vh", borderRadius: "1000em" }} src={user.picture} alt={user.name} />
          <div className="header-details">
            <span>{user.name}</span>
            <div className="logout-button-container">
              <Link to='/cinema/checkout'>
                <span>🛒</span> • <span> </span>
              </Link>
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Profile;