import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Modal from './Modal';

const Navbar = () => {
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMemoOpen(!isMemoOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-white'>Blog<span className='text-orange-400'>A</span>pplication</a>

        {/* Nav Items */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({ path, link }) => (
            <li className='text-white' key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* Social icons and login button */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="/" className='hover:text-orange-500'><FaInstagram /></a>
          <a href="/" className='hover:text-orange-500'><FaLinkedinIn /></a>
          <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
        </div>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        {/* Mobile menu button */}
        {/* Mobile menu button */}
<div className='md:hidden block'>
  <button onClick={toggleMenu} className='cursor-pointer'>
    {isMemoOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className="w-5 h-5" />}
  </button>
</div>

      </nav>

      {/* Mobile Nav Items */}
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMemoOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
        {navItems.map(({ path, link }) => (
          <li className='text-black' key={path}>
            <NavLink to={path}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
