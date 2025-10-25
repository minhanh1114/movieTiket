import React from 'react';
import { Router, Route, Routes } from 'react-router';
import { publicRoutes, privateRoutes } from '@/Router';
import Default from '@/layouts/Default';
import Admin from '@/layouts/Admin';

const App = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />}>
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Route>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = Default;
                if (route.layout) {
                    Layout = route.layout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                }
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default App;
