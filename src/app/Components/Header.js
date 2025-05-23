'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current path
import './Header.scss';
import Image from 'next/image';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname(); // Get the current path

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent link navigation when toggling dropdown
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="headerWrapper">
      {/* Left Side: Logo */}
      <div className="logo">
        <Link href="/">
        <Image src="/Images/logo3.svg" alt="alt" width={140} height={60} />
        </Link>
        <div className='atom_holder'>
          <div id="atom">
            <div id="nucleus">
            </div>
            <div className="orbit">
              <div className="electron"></div>
            </div>
            <div className="orbit">
              <div className="electron"></div>
            </div>
            <div className="orbit">
              <div className="electron"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Navbar */}
      <nav className="menuList">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        {/* Service Menu with Dropdown */}
        <div className="dropdown" ref={dropdownRef}>
          <Link
            href="/service"
            onClick={toggleDropdown}
            className={`dropdownToggle ${pathname.startsWith('/service') ? 'active' : ''}`}
          >
            Services
          </Link>
          {isDropdownOpen && (
            <div className="dropdownMenu">
              <div className='innerItemParent'>
                {/* <h3>Amazon</h3> */}
                <Link href="/services/shopify">Shopify Automation</Link>
                <Link href="/services/tiktok">Tiktok Shop Automation</Link>
                <Link href="/services/amazon">Amazon Automation</Link>
                <Link href="/services/walmart">Wal-Mart Automation</Link>
              </div>
              <div className='innerItemParent'>
                <Link href="/services/ebay">Ebay Automation</Link>
                <Link href="/services/etsy">Etsy Automation</Link>
                <Link href="/services/development">Website development</Link>
                <Link href="/services/digitalMarketing">Digital Marketing</Link>
              </div>
            </div>
          )}
        </div>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
      </nav>

      {/* Right Side: Contact Us Button */}
      <div className="contact contactBtn">
        <Link href="/contact" className="btn">
          Contact →
        </Link>
      </div>
      {/* <button className="menuToggle" >
        mobile button
      </button> */}
      <div className="menuToggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`mobile_Menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='closeBtn' onClick={toggleMenu}>
          <span>X</span>
      </div>
        <nav className="mobileMenu">
          <ul>
            <li>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        </li>
            <li>
              <button className="accordionButton" onClick={toggleServices}>
                Services
              </button>
              {isServicesOpen && (
                <ul className="dropdown">                  
                <li><Link href="/services/shopify">Shopify Automation</Link></li>
                <li><Link href="/services/tiktok">Tiktok Shop Automation</Link></li>
                <li><Link href="/services/amazon">Amazon Automation</Link></li>
                <li><Link href="/services/walmart">Wal-Mart Automation</Link></li>
                <li><Link href="/services/ebay">Ebay Automation</Link></li>
                <li><Link href="/services/etsy">Etsy Automation</Link></li>
                <li><Link href="/services/development">Website development</Link></li>
                <li><Link href="/services/digitalMarketing">Digital Marketing</Link></li>
                </ul>
              )}
            </li>
            <li>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
        </li>
        <li>
        <Link href="/contact">
          Contact Us
        </Link>
        </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
