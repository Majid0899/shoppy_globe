import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
   <div className="flex flex-col  min-h-screen">
    <Header />
      <main className="flex-grow  self-center">
        <Outlet /> {/* This renders the  pages */}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Layout