import AdminNavbar from '@/components/admin/AdminNavbar';
import AdminSideBar from '@/components/admin/AdminSideBar';
import { Outlet } from 'react-router';
import React from 'react';

const Admin = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="flex admin-container relative">
                <AdminSideBar />
                <div className="flex-1 max-w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
