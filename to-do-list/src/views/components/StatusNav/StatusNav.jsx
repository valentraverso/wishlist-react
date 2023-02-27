import { NavLink } from "react-router-dom";
import './StatusNav.css';

export default function StatusNav() {
    return (
        <div className="status-nav__div">
            <div className="nav-buttons__div">
                <span>
                    <NavLink to={'/'}>
                        All
                    </NavLink>
                </span>
                <span>
                    <NavLink to={'/active'}>
                        Active
                    </NavLink>
                </span>
                <span>
                    <NavLink to={'/completed'}>
                        Completed
                    </NavLink>
                </span>
            </div>
        </div>
    )
}