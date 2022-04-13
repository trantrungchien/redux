import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterIndex from '../../components/layouts/FooterIndex'
import HeaderIndex from '../../components/layouts/headerIndex'
const WebsideLayout = () => {
  return (
    <div>
    <header>
        <HeaderIndex/>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <FooterIndex/>
    </footer>
</div>
  )
}

export default WebsideLayout