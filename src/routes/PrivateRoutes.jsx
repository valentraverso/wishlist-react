import { useAuth0 } from "@auth0/auth0-react";
import { Dna } from 'react-loader-spinner';
import PreLogin from "../views/pages/PreLogin/PreLogin";

const PrivateRoutes = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <>
            {
                isLoading ?
                    <Dna
                        visible={true}
                        height="30%"
                        width="30%"
                        ariaLabel="dna-loading"
                        wrapperStyle={{
                            "margin": "auto",
                            "display": "flex"
                        }}
                        wrapperClass="dna-wrapper" />
                    :
                    isAuthenticated ?
                        (children)
                        :
                        <PreLogin />
            }
        </>
    )
}

export default PrivateRoutes