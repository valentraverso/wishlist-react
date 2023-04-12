import { DOMSubRoutes } from '../../routes/DOMRoutes.jsx';
import Profile from '../components/Profile/Profile.jsx';

export default function Layout({ routes }) {
    return (
        <>
            <Profile />
            <DOMSubRoutes routes={routes} />
        </>
    );
}