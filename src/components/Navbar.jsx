import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink to="/">
                    <li className="py-1">Home</li>
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-1">All Doctors</li>
                </NavLink>
                <NavLink to="/about">
                    <li className="py-1">About</li>
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-1">Contact</li>
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown Icon" />
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={() => navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light md:block">Create Account</button>
                )}
                <img onClick={() => setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Menu Icon" />
                
                {/* Mobile Menu */}
                <div className={`${showMenu ? 'fixed' : 'hidden'} w-full h-full right-0 top-0 z-30 bg-white transition-all md:hidden`}>
                    <div className="flex items-center justify-between p-4 border-b">
                        <img src={assets.logo} alt="Logo" className="w-32" />
                        <img onClick={() => setShowMenu(false)} className="w-6 cursor-pointer" src={assets.cross_icon} alt="Close Icon" />
                    </div>
                    <ul className="flex flex-col items-center gap-6 font-medium mt-8">
                        <NavLink onClick={() => setShowMenu(false)} to="/" className="w-full text-center py-3 hover:bg-gray-100">
                            Home
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/doctors" className="w-full text-center py-3 hover:bg-gray-100">
                            All Doctors
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about" className="w-full text-center py-3 hover:bg-gray-100">
                            About
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact" className="w-full text-center py-3 hover:bg-gray-100">
                            Contact
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


