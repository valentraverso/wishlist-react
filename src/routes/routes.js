import Layout from "../views/layouts/Layout.jsx";

import All from "../views/pages/All/All.jsx";
import Active from "../views/pages/Active/Active.jsx";
import Completed from "../views/pages/Completed/Completed.jsx";
import Login from "../views/pages/Login/Login.jsx";

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
            }
        ]
    }, 
    {
        path: "/user/*",
        exact: false,
        component: Layout,
        routes: [
            {
                path: "login",
                exact: true,
                component: Login
            }
        ]
    }
]

export default routes;