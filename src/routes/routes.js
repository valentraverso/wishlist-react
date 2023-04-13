import Layout from "../views/layouts/Layout.jsx";

import All from "../views/pages/All/All.jsx";
import Active from "../views/pages/Active/Active.jsx";
import Completed from "../views/pages/Completed/Completed.jsx";
import Archive from "../views/pages/Archive/Archive.jsx";

const routes = [
    {
        path: "*",
        exact: false,
        component: Layout,
        routes: [
            {
                path: "/",
                exact: true,
                component: All
            }, {
                path: 'active',
                exact: true,
                component: Active
            }, {
                path: 'completed',
                exact: true,
                component: Completed
            }, {
                path: 'archive',
                exact: true,
                component: Archive
            }
        ]
    }
]

export default routes;