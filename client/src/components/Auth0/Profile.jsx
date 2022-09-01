import React from "react";
import Header from "../../sub-components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div><Header /> Log in: </div>;
    }


    return (
        <div>
            <Header />
            {isAuthenticated && (
                <div>
                    <img style={{ height: "10vh", width: "10vw", borderRadius: "1000em" }} src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <LogoutButton />
                </div>
            )}
        </div>

    );
};

export default Profile;