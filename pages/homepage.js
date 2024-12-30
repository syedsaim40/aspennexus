"use client";
import React, { useState } from "react";
import "./homepage.scss";
import { ReactTyped } from "react-typed";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import serviceImg1 from '../public/Images/serviceImg1.png';
import useScreenSize from "../src/app/Hooks/useScreenSize";
import ReviewImg from "../public/Images/reviewImg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Gallery from "../src/app/Components/Gallery";


const Homepage = () => {
  const { winHeight } = useScreenSize();

  const [open, setOpen] = React.useState(false);

 let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var ServiceSlidersettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* // Home Banner */}
      <section className="sectionSpace bannerSec" style={{ height: winHeight }}>
        <div>
          {/* This is main banner */}
          <div className="mainBanner">
            {/* Banner main heading  */}
            <div className="bannerHeading">
              <h1> Global Brandmakers </h1>
              <h2>
                {" "}
                making{" "}
                <ReactTyped
                  strings={["Waves", "Services", "Company"]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  showCursor={true}
                />
              </h2>
            </div>
            {/* Banner links */}
            <div className="bannerLinks">
              <div>
                <Link className="btn" href="/service">
                  Explore our services →
                </Link>
              </div>
              {/* <div className="Video">
                <FontAwesomeIcon className="vIcon" icon={faPlay} />
                <p>Watch our reel</p>
              </div> */}
            </div>
            <Link href="#services" className="mouseHolder">
            <FontAwesomeIcon icon={faComputerMouse} flip="vertical" style={{color: "#0b3543",}} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services new section */}
      <section className="sectionSpace" id="services">
        <div className="container">
          <div className="service_wrapper">
            <div className="section_heading">
              <h2>What we do</h2>
              <h4>For your <span>Business</span></h4>
            </div>
            <div className="service_slider">
              {/* <div className="arrowSpace"></div> */}
              <Slider {...ServiceSlidersettings}>
                <Link href="/services/amazon" className="slideCard">
                  <div className="slide_Img">
                    <Image src="/Images/amazon.svg" alt="service image" width={80} height={80}/>
                  </div>
                  <h2>Amazon Automation</h2>
                  <p>From refining product listings to launching impactful advertising campaigns, we ensure your brand excels in a competitive marketplace, driving both growth and success online.</p>
                </Link>
                <Link href="/services/amazon" className="slideCard">
                  <div className="slide_Img">
                    <Image src="/Images/amazon.svg" alt="service image" width={80} height={80}/>
                  </div>
                  <h2>Shopify Automation</h2>
                  <p>From refining product listings to launching impactful advertising campaigns, we ensure your brand excels in a competitive marketplace, driving both growth and success online.</p>
                </Link>
                <Link href="/services/amazon" className="slideCard">
                  <div className="slide_Img">
                    <Image src="/Images/amazon.svg" alt="service image" width={80} height={80}/>
                  </div>
                  <h2>Web Development</h2>
                  <p>From refining product listings to launching impactful advertising campaigns, we ensure your brand excels in a competitive marketplace, driving both growth and success online.</p>
                </Link>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section slideshow on home */}
      <section className="gallery_wrapper sectionSpace">
        <div className="container gallery_inner">
          <div className="containerText">
            <h3>See The Results</h3>
            <h2>Check out some of our past results</h2>
          </div>
          <div className="cont_btn">
            <p>Integrate your Amazon and Shopify stores seamlessly with our automation services. Automate inventory updates and gain real-time data insights, leading to streamlined operations, heightened productivity, and enhanced customer experiences.</p>
            <Link className="btn4" href={"/contact"}>Book a Free Consultation</Link>
          </div>
        </div>
        <div className='container gallery_Holder'>
          <Gallery />
        </div>
      </section>

      {/* Review Section */}
      <section className="sectionSpace">
        <div className="container">
        
          <div className="review">
          <div className="reviewHeading">
              <h3>What our great customers say</h3>
            </div>
            
          <Slider {...settings}>
            
          <div className="courselReview">
         
            <div className="reviewCard">
             <div className="reviewImg">
              <Image src={ReviewImg} alt="ReviewImg" />
             </div>
             <div className="reviewText">
              <h4 >Waves demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.</h4>
              <span>Jerome Bell</span>
              <p>President of Sales (Binford Ltd.)</p>
             </div>
            </div>
          </div>
          <div className="courselReview">
         
         <div className="reviewCard">
          <div className="reviewImg">
           <Image src={ReviewImg} alt="ReviewImg" />
          </div>
          <div className="reviewText">
           <h4 >Waves demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.</h4>
           <span>Jerome Bell</span>
           <p>President of Sales (Binford Ltd.)</p>
          </div>
         </div>
       </div>
       <div className="courselReview">
         
         <div className="reviewCard">
          <div className="reviewImg">
           <Image src={ReviewImg} alt="ReviewImg" />
          </div>
          <div className="reviewText">
           <h4 >Waves demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.</h4>
           <span>Jerome Bell</span>
           <p>President of Sales (Binford Ltd.)</p>
          </div>
         </div>
       </div>
          </Slider>
          </div>
        
        
        </div>
      </section>
    </>
  );
};

export default Homepage;
