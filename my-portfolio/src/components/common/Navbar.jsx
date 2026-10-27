import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const pages = [
  { id: 1, path: '#', component: 'Home' },
  { id: 2, path: '#about', component: 'About' },
  { id: 3, path: '#skills', component: 'Skills' },
  { id: 4, path: '#projects', component: 'Projects' },
  { id: 5, path: '#contact', component: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  // Track scrolling and update active links
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'contact'];
    
    // Fallback for home/top page tracking
    const handleHomeScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('#');
      }
    };
    window.addEventListener('scroll', handleHomeScroll);

    const observerOptions = {
      root: null, // uses the browser viewport
      rootMargin: '-40% 0px -50% 0px', // detects sections near the center/top of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each portfolio page section elements
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleHomeScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-primary text-primary-content shadow-sm sticky top-0 z-50 w-full">
      {/* Main Navbar Container */}
      <div className="navbar max-w-7xl mx-auto h-16 px-4 md:px-10 flex items-center justify-between">
        
        {/* Left Section: Logo & Mobile Trigger */}
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="btn btn-ghost btn-circle text-primary-content"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold ml-2">
            <span className="font-extrabold text-secondary">P</span>ortfolio
          </h1>
        </div>
         
        {/* Center Section: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 p-0">
            {pages.map((page) => (
              <li key={page.id} className="text-[16px]">
                <a 
                  href={page.path} 
                  className={`transition-colors duration-200 ${
                    activeSection === page.path 
                      ? "text-secondary font-bold underline underline-offset-4" 
                      : "hover:text-secondary"
                  }`}
                >
                  {page.component}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Theme Toggle & CV Download */}
        <div className="navbar-end flex items-center gap-2">
          <ThemeChanger />
          <a href="/Zeenat-Shafqaat-CV.pdf" download className="hidden sm:inline-flex btn btn-sm btn-outline btn-secondary gap-2">
            <FaDownload /> Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-base-content/10 px-6 py-4 absolute left-0 right-0 top-16 shadow-lg z-50">
          <ul className="menu menu-vertical  gap-2 p-0">
            {pages.map((page) => (
              <li key={page.id}>
                <a 
                  onClick={() => setIsOpen(false)} 
                  href={page.path}
                  className={`py-3 text-lg ${
                    activeSection === page.path ? "text-secondary font-bold" : ""
                  }`}
                >
                  {page.component}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-base-content/10 sm:hidden">
            <a href="/Zeenat-Shafqaat-CV.pdf" download className="btn btn-sm btn-outline btn-secondary w-full gap-2">
              <FaDownload /> Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const ThemeChanger = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'myLight');

  const handleToggle = (e) => {
    setTheme(e.target.checked ? 'myDark' : 'myLight');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate h-10 w-10 btn btn-ghost btn-circle text-primary-content">
      <input type="checkbox" checked={theme === 'myDark'} onChange={handleToggle} />
      <svg className="swap-off h-6 w-6 fill-current" xmlns="http://w3.org" viewBox="0 0 24 24">
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
      <svg className="swap-on h-6 w-6 fill-current" xmlns="http://w3.org" viewBox="0 0 24 24">
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
};

export default Navbar;
