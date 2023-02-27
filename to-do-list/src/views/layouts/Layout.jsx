import {DOMSubRoutes} from '../../routes/DOMRoutes.jsx';

export default function Layout({routes}) {
    return (
        <>
            <DOMSubRoutes routes={routes} />
        </>
    );
}