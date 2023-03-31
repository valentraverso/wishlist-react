import {DOMSubRoutes} from '../../routes/DOMRoutes.jsx';

export default function Layout({routes}) {
    return (
        <div>
            <DOMSubRoutes routes={routes} />
        </div>
    );
}