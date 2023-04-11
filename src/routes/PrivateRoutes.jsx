import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = ({ children }) => {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    console.log(isAuthenticated, user)

    return (
        <>
            {
                isAuthenticated ? children : <p onClick={() => {loginWithRedirect()}}>Login</p>
            }
        </>
    )
}

export default PrivateRoutes