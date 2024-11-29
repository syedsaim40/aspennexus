'use client'
import React from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import  './Header.scss';


function Header() {
    const router = useRouter;

  return (
    <header className="headerWrapper">
      {/* Left Side: Logo */}
      <div className="logo">
        <Link href="/">
          MyLogo
        </Link>
      </div>

      {/* Center: Navbar */}
      <nav className="menuList">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About Us
        </Link>
        <Link href="/service">
          Service
        </Link>
      </nav>

      {/* Right Side: Contact Us Button */}
      <div className="contact">
        <Link href="/contact" className='btn'>
          Contact Us →
        </Link>
      </div>
    </header>
  )
}

export default Header
