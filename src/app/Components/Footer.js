import React from 'react';
import './Footer.scss';
import Link from 'next/link';
import facebookVec from '../../../public/Images/faceVector.png';
import twitterVec from '../../../public/Images/TwitVector.png';
import instaVec from '../../../public/Images/instaVector.png';
import linkVec from '../../../public/Images/linkVector.png';
import logo from "../../../public/Images/logo3.svg";
import Image from 'next/image';

function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className='footer_wrapper'>
                        <div className='footer_logo'>
                            <div className='logoWrapper'>
                                <Image src={logo} alt="logo"/>
                            </div>
                            <div className='logo_content'>
                                <h2> we do the <span>hard work,</span></h2>
                                <h2>you sit back <span>relax!</span></h2>
                            </div>
                        </div>
                        <div className='footer_outer'>
                            <div className='footer_box'>
                                <h3>Terms & Policies</h3>
                                <ul className='footer_List'>
                                    <li><Link href="#">Term of Service</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className='footer_box'>
                                <h3>Company</h3>
                                <ul className='footer_List'>
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className='footer_box'>
                                <h3>Contact</h3>
                                <ul className='footer_List'>
                                    <li><a href={`tel:${+8884017530}`}>+(888) 401-7530</a></li>
                                    <li><a href={`mailto:${'info@aspennexus.com'}`}>info@aspennexus.com</a></li>
                                </ul>
                            </div>
                            <div className='footer_box'>
                                <h3>Contact</h3>
                                <ul className='footer_List'>
                                    <li><address>2785, 447 Broadway, 2nd Floor, New York, NY, New York, US, 10013</address></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer section */}
            {/* <div className='footerMain' >
                <div className='container'>
                    <div className="footer">
                        <div className="footerList">
                            <div className="footLogo">
                                <h1>Waves</h1>
                            </div>
                            <div className="footMenu">
                                <Link href="/">Home</Link>
                                <Link href="/about">About us</Link>
                                <Link href="/service">Services</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="social">
                            <Link href="#"><Image src={facebookVec} alt="alt" width={27} height={27} /></Link>
                            <Link href="#"><Image src={twitterVec} alt="alt" width={27} height={27} /></Link>
                            <Link href="#"><Image src={instaVec} alt="alt" width={27} height={27} /></Link>
                            <Link href="#"><Image src={linkVec} alt="alt" width={27} height={27} /></Link>
                        </div>
                        <hr></hr>
                        <div className="footerTerms">
                            <Link href="#"> <p>Privacy Policy | Terms of Use</p></Link>
                            <Link href="#"><p>© 2022 Waves. All rights reserved.</p></Link>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Footer
