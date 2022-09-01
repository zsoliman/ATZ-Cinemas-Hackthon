import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const LoginScreen = () => {
    return (
        <div>
            <Profile />
            <LoginButton />
            {/* <LogoutButton /> */}
        </div>
    )
}

export default LoginScreen;