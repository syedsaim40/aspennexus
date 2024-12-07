"use client";
import React, { useState } from "react";
import "./homepage.scss";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import serviceImg1 from "../public/Images/serviceImg1.png";
import useScreenSize from "../src/app/Hooks/useScreenSize";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import ReviewImg from "../public/Images/reviewImg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Homepage = () => {
  const { winHeight } = useScreenSize();

  const [open, setOpen] = React.useState(false);

 let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* // Home Banner */}
      <section style={{ height: winHeight }}>
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
                <Link className="btn" href="#">
                  Explore our services →
                </Link>
              </div>
              <div className="Video">
                <FontAwesomeIcon className="vIcon" icon={faPlay} />
                <p>Watch our reel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery_wrapper">
        <div className="container">
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
              {
                src: "/public/Images/slide1.webp",
                alt: "image 1",
                width: 3840,
                height: 2560,
                srcSet: [
                  { src: "/public/Images/saim.jpg", width: 320, height: 213 },
                  { src: "/public/Images/saim.jpg", width: 640, height: 427 },
                  { src: "/public/Images/saim.jpg", width: 1200, height: 800 },
                  { src: "/public/Images/saim.jpg", width: 2048, height: 1365 },
                  { src: "/public/Images/saim.jpg", width: 3840, height: 2560 },
                ],
              },
              // ...
            ]}
          />
        </div>
      </section>

      {/* Services Section shocase on home */}
      <section>
        <div className="container">
          {/* Service section */}
          <div className="serviceMain">
            {/* Service heading */}
            <div className="serviceText">
              <p>OUR SERVICES</p>
              <h1>
                Our agency experts will provide you with a full stack of
                services
              </h1>
            </div>
            {/* Service container */}
            <div className="serviceContainer">
              {/* Service cards */}
              <div className="serviceCard">
                <Image src={serviceImg1} alt="alt" height={150} width={150} />
                <h2>Strategy services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.{" "}
                </p>
                <Link href="href">Learn More</Link>
              </div>
              <div className="serviceCard">
                <Image src={serviceImg1} alt="alt" />
                <h2>Marketing services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.{" "}
                </p>
                <Link href="href">Learn More</Link>
              </div>
              <div className="serviceCard">
                <Image src={serviceImg1} alt="alt" />
                <h2>Design services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.{" "}
                </p>
                <Link href="href">Learn More</Link>
              </div>
              <div className="serviceCard">
                <Image src={serviceImg1} alt="alt" />
                <h2>Development services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.{" "}
                </p>
                <Link href="href">Learn More</Link>
              </div>
              <div className="serviceCard">
                <Image src={serviceImg1} alt="alt" />
                <h2>Development services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.{" "}
                </p>
                <Link href="href">Learn More</Link>
              </div>
              <div className="serviceCard">
                <Image src={serviceImg1} alt="alt" />
                <h2>Development services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.{" "}
                </p>
                <Link href="href">Learn More</Link>
              </div>
            </div>
            <div className="exploreBtn">
              <Link href="/service" className="btn2">
                Explore All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section slideshow on home */}

      {/* Review Section */}
      <section>
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
