import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const Layout = ({ children }) => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between'>
      <Navbar />
      {/* pt-16 ensures content stays perfectly visible below the sticky 64px navbar */}
      <main className='w-full max-w-7xl mx-auto pt-16 flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
