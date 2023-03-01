import {DOMSubRoutes} from '../../routes/DOMRoutes.jsx';

export default function Layout({routes}) {
    return (
        <div className='hola'>
            <DOMSubRoutes routes={routes} />
        </div>
    );
}