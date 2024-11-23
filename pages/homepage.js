'use client'
import React from 'react';
import './homepage.scss';
import { ReactTyped } from "react-typed";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import serviceImg1 from '../public/Images/serviceImg1.png';
import useScreenSize from '../src/app/Hooks/useScreenSize';

const Homepage = () => {
  const{winHeight} = useScreenSize();

  return (
    <>
      {/* // Home Banner */}
      <section style={{height: winHeight}}>
          <div>
        {/* This is main banner */}
          <div className="mainBanner">
            {/* Banner main heading  */}
              <div className="bannerHeading">
                  <h1> Global Brandmakers  </h1>
                  <h2 > making  {" "}
                    <ReactTyped
                      strings={["Waves","Services","Company"]}
                      typeSpeed={100}
                      loop
                      backSpeed={20}
                      showCursor={true}
                    />
                  </h2>
              </div>
              {/* Banner links */}
              <div className="bannerLinks">
                  <div >
                  <Link className='btn' href="#">Explore our services →</Link>
                  </div>
                  <div className="Video">
                  <FontAwesomeIcon className='vIcon' icon={faPlay} />
                  <p>Watch our reel</p>
                  </div>
              </div>
          </div>
      </div>
      </section>

      {/* Services Section shocase on home */}
      <section>
          <div className='container'>
          {/* Service section */}
          <div className="serviceMain">
              {/* Service heading */}
              <div className="serviceText">
              <p>OUR SERVICES</p>
              <h1>Our agency experts will provide you with a full stack of services</h1>
              </div>
              {/* Service container */}
              <div className="serviceContainer">
                  {/* Service cards */}
                  <div className="serviceCard">
                      <Image src={serviceImg1} alt="alt" height={150} width={150} />
                      <h2 >Strategy services</h2>
                      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. </p>
                      <Link href="href">Learn More</Link>
                  </div>
                  <div className="serviceCard">
                      <Image src={serviceImg1} alt="alt" />
                      <h2 >Marketing services</h2>
                      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. </p>
                      <Link href="href">Learn More</Link>
                  </div>
                  <div className="serviceCard">
                      <Image src={serviceImg1} alt="alt" />
                      <h2 >Design services</h2>
                      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. </p>
                      <Link href="href">Learn More</Link>
                  </div>
                  <div className="serviceCard">
                      <Image src={serviceImg1} alt="alt" />
                      <h2 >Development services</h2>
                      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. </p>
                      <Link href="href">Learn More</Link>
                  </div>
                  <div className="serviceCard">
                      <Image src={serviceImg1} alt="alt" />
                      <h2 >Development services</h2>
                      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. </p>
                      <Link href="href">Learn More</Link>
                  </div>
                  <div className="serviceCard">
                      <Image src={serviceImg1} alt="alt" />
                      <h2 >Development services</h2>
                      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod. </p>
                      <Link href="href">Learn More</Link>
                  </div>
              </div>
              <div className="exploreBtn">
                <Link href="#" className="btn2">Explore All Services →</Link>
              </div>
          </div>
      </div>
      </section>

      {/* Gallery Section slideshow on home */}
      <section className='gallery_wrapper'>
          <div className='container'></div>
      </section>
    </>
  )
}

export default Homepage