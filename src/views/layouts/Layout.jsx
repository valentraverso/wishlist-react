import { Outlet } from 'react-router-dom';
import Profile from '../components/Profile/Profile.jsx';

export default function Layout() {
    return (
        <>
            <Profile />
            <Outlet />
        </>
    );
}