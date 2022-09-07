// import Header from "../sub-components/Header";
import Profile from "./Auth0/Profile";
import Footer from "../sub-components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Profile />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout;