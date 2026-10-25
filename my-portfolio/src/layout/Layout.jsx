import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const Layout = ({children}) => {
  return (
   <div className='w-full'>
    <Navbar />
     <div className='w-full max-w-7xl mx-auto '>
      {children}
    </div>
    <Footer />
   </div>
  )
}


export default Layout
