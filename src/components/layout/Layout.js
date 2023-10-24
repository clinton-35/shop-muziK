import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar/>
           {/* Components */}
           <Outlet/>
           
        <Footer/>
    </div>
  )
}

export default Layout