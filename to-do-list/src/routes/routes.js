import Layout from "../views/layouts/Layout.jsx";

import All from "../views/pages/All/All.jsx";
import Active from "../views/pages/Active/Active.jsx";

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
            },{
                path: 'active',
                exact: true,
                component: Active
            }
        ]
    }
]

export default routes;