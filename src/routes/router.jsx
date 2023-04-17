import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../views/layouts/Layout.jsx";

import All from "../views/pages/All/All.jsx";
import Active from "../views/pages/Active/Active.jsx";
import Completed from "../views/pages/Completed/Completed.jsx";
import Archive from "../views/pages/Archive/Archive.jsx";
import Search from "../views/pages/Search/Search.jsx";

import PrivateRoutes from "./PrivateRoutes.jsx";

const router = createBrowserRouter([
    {
        element: <PrivateRoutes><Layout /></PrivateRoutes>,
        children: [
            {
                path: '/',
                element: <All />
            },
            {
                path: '/active',
                element: <Active />
            },
            {
                path: '/completed',
                element: <Completed />
            },
            {
                path: '/archive',
                element: <Archive />
            },
            {
                path: '/search',
                element: <Search />
            }
        ]
    }
],
{basename: '/'}
)

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}