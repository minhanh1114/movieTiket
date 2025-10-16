import React from 'react';
import { Router, Route, Routes } from 'react-router';
import { publicRoutes } from '@/Router';
import Default from '@/layouts/Default';

const App = () => {
    return (
        <Routes>
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
