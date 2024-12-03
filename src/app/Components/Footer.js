import React from 'react';
import './Footer.scss';
import Link from 'next/link';
import facebookVec from '../../../public/Images/faceVector.png';
import twitterVec from '../../../public/Images/TwitVector.png';
import instaVec from '../../../public/Images/instaVector.png';
import linkVec from '../../../public/Images/linkVector.png';
import Image from 'next/image';

function Footer() {
    return (
        <div>
            {/* Footer section */}
            <div className='footerMain' >
                <div className='container'>
                    {/* Footer */}
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
                    {/* <div className="footerPopup" >
                        <h1 className="">Ready for your project</h1>
                        <Link href="/contact" className='btn'>Get in touch</Link>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Footer
