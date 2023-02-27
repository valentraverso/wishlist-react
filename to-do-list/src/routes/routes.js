import Layout from "../views/layouts/Layout.jsx";

import Home from "../views/pages/Home/Home.jsx";

const routes = [
    {
        path: "*",
        exact: false,
        component: Layout,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
        ]
    }
]

export default routes;