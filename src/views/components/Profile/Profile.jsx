import "./Profile.css"
import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const [hover, setHover] = useState();
    const { logout } = useAuth0()

    return (
        <div className="container-profile__div"
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}>
            <div className="container-profile-grid__div">
                <div className="container-profile-icon__div">
                    <div className="container-profile-logo__div">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                    </div>
                </div>
                <div className={hover ? `container-profile-hover__div` : `hidden-container-profile-hover__div`}>
                    <span onClick={() => { logout() }}>Close Session</span>
                </div>
            </div>
        </div>
    )
}