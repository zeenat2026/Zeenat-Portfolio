import { useEffect, useState } from "react"
import { FaDownload } from "react-icons/fa";


const pages = [{id:1,path:'#',component:'Home'},
  {id:2,path:'#about',component:'About'},
  {id:3,path:'#skills',component:'Skills'} ,
  {id:4,path:'#projects',component:'Projects' },
  {id:5,path:'#contact',component:'Contact'}]
const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)
  
 const handleMenue=(e)=>{
  setIsOpen(e.target.checked ? true : false)
 }
  return (
<div className=" bg-primary px-2 md:px-10 shadow-sm text-primary-content flex items-center justify-between sticky top-0 z-10">

      <div className="max-lg:collapse mx-auto w-full">
    <input id="navbar-1-toggle" className="peer hidden" type="checkbox" checked={isOpen} onChange={handleMenue} />

      <div className="collapse-title navbar flex items-center justify-center">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden bg-primary text-primary-content">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <h1 className="text-xl lg:text-2xl font-bold mx-1"><span className=" font-extrabold text-secondary">P</span>ortfolio</h1>
        
    </div>
         
         <div className="navbar-center">
           <ul className="menu menu-horizontal max-lg:hidden  flex flex-nowrap gap-4 items-center">
       {pages.map((page) => (
         <li key={page.id} className="text-[16px]"><a href={page.path} >{page.component}</a></li>
       ))}
    </ul>
         </div>
    <div className="navbar-end ">
        
      <div className="flex items-center">
    <ThemeChanger />

      <a href="/Zeenat-Shafqaat-CV.pdf" download className=" hidden sm:inline-flex mx-2 btn btn-xs btn-outline btn-secondary">
            <FaDownload />Resume
            </a>
  </div>
    
    </div>
    </div>
  

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
       {pages.map((page) => (
         <li key={page.id}><a onClick={()=>setIsOpen(false)} href={page.path}>{page.component}</a></li>
       ))}
    </ul>
     <a href="/Zeenat-Shafqaat-CV.pdf" download className="mt-2 ml-4 btn btn-sm btn-outline btn-secondary">
            <FaDownload />Resume
            </a>
  </div>


</div>

</div>
  )
}



const ThemeChanger = () => {
const [theme , setTheme]  = useState(localStorage.getItem('theme') || 'myLight')


const handleToggle = (e) => {
   setTheme(e.target.checked ? 'myDark' : 'myLight')
}

useEffect(()=>{
   document.documentElement.setAttribute('data-theme', theme)
   localStorage.setItem('theme',theme)
},[theme])
  return (
    <label className="swap swap-rotate h-10 w-10">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" checked={theme === 'myDark'} onChange={handleToggle}  />
  
  {/* sun icon */}
  <svg
    className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  )
}

export default Navbar
