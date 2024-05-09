import React, { useState, useEffect } from 'react';
// import './nav.css'; // Import your CSS file
import { NavLink, Link } from 'react-router-dom';

// Create a React component with state variables for scroll-based color changes
const NavBar = ({ bannerS, aboutS, statisticS, FAQS, constractS, scrollHandeler }) => {
  const [navbarColor, setNavbarColor] = useState('bg-transparent'); // Background color of navbar
  const [navbarTextColor, setNavbarTextColor] = useState('text-black'); // Text color of navbar
  const [navbarShadow, setNavbarShadow] = useState(''); // To add shadow when scrolled

  // Add an event listener to handle scroll-based changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('bg-cyan-800'); // Change background color
        setNavbarTextColor('text-white'); // Change text color
        setNavbarShadow('shadow'); // Add shadow
      } else {
        setNavbarColor('bg-transparent'); // Reset to transparent background
        setNavbarTextColor('text-black'); // Reset to black text
        setNavbarShadow(''); // Remove shadow
      }
    };

    window.addEventListener('scroll', handleScroll); // Add event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, []); // Dependency array

  const Links = (
    <>
      {/* Use NavLink to apply active styles when a link is active */}
      <li><Link onClick={() => scrollHandeler(bannerS)} className={navbarTextColor}>Home</Link></li>
      <li><Link onClick={() => scrollHandeler(aboutS)} className={navbarTextColor}>About</Link></li>
      <li><Link onClick={() => scrollHandeler(statisticS)} className={navbarTextColor}>Statistics</Link></li>
      <li><Link onClick={() => scrollHandeler(FAQS)} className={navbarTextColor}>FAQ</Link></li>
      <li><Link onClick={() => scrollHandeler(constractS)} className={navbarTextColor}>Contact</Link></li>
    </>
  );

  return (
    <div>
      <div className={`navbar fixed ${navbarColor} bg-opacity-75 px-10 z-20 transition-colors duration-300 ${navbarShadow}`}>
        <div className={`navbar-start ${navbarTextColor}`}>
          <div className="dropdown">
            <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${navbarTextColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52 ${navbarTextColor}`}>
              {Links}
            </ul>
          </div>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center'>
              <div className='h-14 bg-white rounded-full w-14'>
                <img src="https://i.ibb.co/kyg59Y0/pngegg.png" alt="" />
              </div>
            </div>
            <div className='space-y-0 pt-1'>
              <h3 className={`font-semibold ${navbarTextColor}`}>HealthCare</h3>
              <p className='leading-none'>Private Limited</p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className={`navbar-end hidden lg:flex`}>
          <ul className={`menu menu-horizontal font-semibold px-1 pr-10 ${navbarTextColor}`}>
            {Links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar; // Export the component
