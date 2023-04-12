import { useAuth0 } from "@auth0/auth0-react";
import './PreLogin.css';

export default function PreLogin(){
    const {loginWithRedirect} = useAuth0();

    return(
        <section className="section-prelogin__section">
            <h1 className="text-principal__h1">
                Hi👋,
                Welcome to the wishlist🌠
            </h1>
            <span className="button-login__span"
            onClick={() => loginWithRedirect()}>Login</span>
        </section>
    )
}