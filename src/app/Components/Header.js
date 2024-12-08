'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current path
import './Header.scss';

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
        <Link href="/">MyLogo</Link>
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
                <Link href="/services/shopify">Shopify automatically</Link>
                <Link href="/services/amazon">Amazon Automation</Link>
                <Link href="/services/tiktok">Tiktok Shop Automation</Link>
                <Link href="/services/digitalMarketing">Digital Marketing</Link>
              </div>
              <div className='innerItemParent'>
                <Link href="/services/graphicDesign">Graphic Designing</Link>
                <Link href="/services/privateLabel">Private Labeling</Link>
                <Link href="/services/websiteDevelop">Website development</Link>
              </div>
            </div>
          )}
        </div>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
      </nav>

      {/* Right Side: Contact Us Button */}
      <div className="contact">
        <Link href="/contact" className="btn">
          Contact →
        </Link>
      </div>
    </header>
  );
}

export default Header;
