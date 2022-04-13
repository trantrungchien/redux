import React from 'react'
import HeaderLayoutAdmin from './headerLayoutAdmin';
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
    return (
        <div>
            <HeaderLayoutAdmin />
            <Outlet />
        </div>
    )
}

export default AdminLayout