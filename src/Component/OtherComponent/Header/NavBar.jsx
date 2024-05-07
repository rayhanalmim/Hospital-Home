import React from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom';

const NavBar = ({ bannerS, aboutS, skillS, projectS, constractS, scrollHandeler }) => {
    const Link = <>
        <li><NavLink onClick={() => scrollHandeler(bannerS)}>Home</NavLink></li>
        <li><NavLink onClick={() => scrollHandeler(aboutS)}>About</NavLink></li>
        <li><NavLink onClick={() => scrollHandeler(skillS)}>Skill</NavLink></li>
        <li><NavLink onClick={() => scrollHandeler(projectS)}>Feature project</NavLink></li>
        <li><NavLink onClick={() => scrollHandeler(constractS)}>Contact</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar fixed bg-black bg-opacity-15 px-10 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
                            {Link}
                        </ul>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex justify-center items-center'>
                            <div className='h-14 w-14'>
                                <img src="https://i.ibb.co/kyg59Y0/pngegg.png" alt="" />
                            </div>
                        </div>
                        <div className='space-y-0 pt-1'>
                            <h3 className='font-semibold text-black'>HealthCare</h3>
                            <p className='leading-none'>private limited</p>
                        </div>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 pr-10">
                        {Link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;