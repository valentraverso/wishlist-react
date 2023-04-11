import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './routes.js';
import PrivateRoutes from './PrivateRoutes.jsx';

export function DOMRoutes() {
    return (
        <PrivateRoutes>
            <BrowserRouter>
                <Routes>
                    {
                        routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={<route.component routes={route.routes} />}
                            />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </PrivateRoutes>
    )
}

export function DOMSubRoutes({ routes }) {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
        </Routes>
    )
}