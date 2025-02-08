"use client";
import React, { useState, useRef } from "react";
import "./homepage.scss";
import { ReactTyped } from "react-typed";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import useScreenSize from "../src/app/Hooks/useScreenSize";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Gallery from "../src/app/Components/Gallery";
import CountUp from "react-countup";
import useInView from "../src/app/Hooks/useInView";
import FAQ from "../src/app/Components/FAQ";
import faqImage from "../public/Images/faq.jpg";
import Testimonials from "../src/app/Components/Testimonials";
import overview from "../public/Images/overview.png";


const Homepage = () => {
  const { winHeight, winWidth } = useScreenSize();

  const [open, setOpen] = React.useState(false);

  const counterRef = useRef(null);
  const isInView = useInView(counterRef);

  // Object for data managing it testimonials
  // const testimonials = [
  //   {
  //     name: "John Carter",
  //     username: "@johncarter",
  //     content:
  //       "The Amazon Automation service is top-notch. I've been able to scale my store effortlessly and see consistent profits. Thank you for making this possible!",
  //   },
  //   {
  //     name: "Jane Doe",
  //     username: "@janedoe",
  //     content:
  //       "This service has transformed my business! Their team is professional, and the results are incredible.",
  //   },
  //   {
  //     name: "Michael Smith",
  //     username: "@michaelsmith",
  //     content:
  //       "Highly recommend! Their automation solutions saved me so much time and effort.",
  //   },
  //   {
  //     name: "John Carter",
  //     username: "@johncarter",
  //     content:
  //       "The Amazon Automation service is top-notch. I've been able to scale my store effortlessly and see consistent profits. Thank you for making this possible!",
  //   },
  //   {
  //     name: "Jane Doe",
  //     username: "@janedoe",
  //     content:
  //       "This service has transformed my business! Their team is professional, and the results are incredible.",
  //   },
  //   {
  //     name: "Michael Smith",
  //     username: "@michaelsmith",
  //     content:
  //       "Highly recommend! Their automation solutions saved me so much time and effort.",
  //   },
  //   {
  //     name: "John Carter",
  //     username: "@johncarter",
  //     content:
  //       "The Amazon Automation service is top-notch. I've been able to scale my store effortlessly and see consistent profits. Thank you for making this possible!",
  //   },
  //   {
  //     name: "Jane Doe",
  //     username: "@janedoe",
  //     content:
  //       "This service has transformed my business! Their team is professional, and the results are incredible.",
  //   },
  //   {
  //     name: "Michael Smith",
  //     username: "@michaelsmith",
  //     content:
  //       "Highly recommend! Their automation solutions saved me so much time and effort.",
  //   },
  //   {
  //     name: "John Carter",
  //     username: "@johncarter",
  //     content:
  //       "The Amazon Automation service is top-notch. I've been able to scale my store effortlessly and see consistent profits. Thank you for making this possible!",
  //   },
  //   {
  //     name: "Jane Doe",
  //     username: "@janedoe",
  //     content:
  //       "This service has transformed my business! Their team is professional, and the results are incredible.",
  //   },
  //   {
  //     name: "Michael Smith",
  //     username: "@michaelsmith",
  //     content:
  //       "Highly recommend! Their automation solutions saved me so much time and effort.",
  //   },
  // ];

  // Function to generate random gradient
  // const generateRandomGradient = () => {
  //   const randomColor = () => Math.floor(Math.random() * 256);
  //   const color1 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  //   const color2 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  //   return `linear-gradient(45deg, ${color1}, ${color2})`;
  // };


  // Sliders variable settings start
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
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
  var testimonialsSlideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "ease",
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
  // Sliders variable settings end

  // Content for the Service Slider Content

  const servicescontent = [
    {
      link: "/services/shopify",
      img: "/Images/amazon.svg",
      heading: "Shopify Automation",
      description: "Have a hassle-free work experience through our shopify automations!",
    },
    {
      link: "/services/tiktok",
      img: "/Images/amazon.svg",
      heading: "TikTok Shop Automation",
      description: "Our experts foster a way for brands to stay ahead on the ever-changing TikTok trends",
    },
    {
      link: "/services/amazon",
      img: "/Images/amazon.svg",
      heading: "Amazon Automation",
      description: "Overview our automation services to learn how you can expand on world’s largest digital platform.",
    },
    {
      link: "/services/websiteDevelop.js",
      img: "/Images/amazon.svg",
      heading: "Web development Services",
      description: "Functionality and innovation are the two key features we incorporate in our web development services.",
    },
    {
      link: "/services/digitalMarketing",
      img: "/Images/amazon.svg",
      heading: "Digital marketing Services",
      description: "A good marketing technique and strategy amplify your brand’s growth in no time. Here’s how it works!",
    },
  ];

  return (
    <>
      {/* // Home Banner */}
      <section className="sectionSpace bannerSec" style={{ height: winHeight }}>
        <div>
          {/* This is main banner */}
          <div className="mainBanner">
            {/* Banner main heading  */}
            <div className="bannerHeading">
              <h2>
                <ReactTyped
                  strings={[
                    "Innovate",
                    "Thrive",
                    "Succeed",
                    "Simplify ",
                    "Elevate",
                    "Achieve",
                    "Streamline",
                    "Transform",
                    "Empower",
                    "Advance",
                    "Optimize",
                    "Revolutionize",
                    "Excel",
                  ]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  showCursor={true}
                />
                {" "}
                with Aspen Nexus{" "}
              </h2>
             
            </div>
            <div className="banner_desp">
              <p>Aspen Nexus; a tech driven company bringing you allthe solutions, be it store setup, automations or selling digital products online through eye catching web designs, our experts use updated technology and tools to help you grow.</p>
            </div>
            {/* Banner links */}
            <div className="bannerLinks">
              <div>
                <Link className="btn" href="/service">
                  Explore Us →
                </Link>
              </div>
              {/* <div className="Video">
                <FontAwesomeIcon className="vIcon" icon={faPlay} />
                <p>Watch our reel</p>
              </div> */}
            </div>
            <Link href="#services" className="mouseHolder">
              <FontAwesomeIcon icon={faComputerMouse} flip="vertical" style={{ color: "#fff", }} />
            </Link>
          </div>
        </div>
      </section>

    {/* New Overview section */}
    <section className="overview">
       <div className="container">
        <div className="overview_section">
          <div className="overview_img">
          <Image src={overview} alt="service image" width={553} height={500} />
          </div>
          <div className="overview_content">
            <h2>Amazon | Shopify | TikTok</h2>
            <h1>Work With The Best Leaders In The Field To Innovate Your E-Store Advanced Strategy</h1>
            <p>
            Get tips that make sense to you to grow your online store. If you are establishing your online business on Amazon, Shopify, eBay, Walmart, or creating a custom website, we will equip you with everything you need to become successful. From starting a side gig on a tight budget, we have website design services that can help you kick off without breaking the bank. Looking to dominate your niche and stand out from the crowd? Let us help you make that vision a reality. We will guide you every step of the way to ensure that your e-commerce business achieves success. No matter the stage you are at in your journey, we will turn your goals into reality and position you above your competition.</p>
            <button className="btn btn-over"  >Ready? Set? LetsGo</button>
          </div>
        </div>
       </div>
    </section>


      {/* Services new section */}
      <section className="sectionSpace" id="services">
        <div className="container">
          <div className="service_wrapper">
            <div className="section_heading">
              <h2>EXPLORE OUR</h2>
              <h4><span>SERVICES AND SOLUTIONS!</span></h4>
            </div>
            <div className="service_slider">
              {/* <div className="arrowSpace"></div> */}
              <Slider {...ServiceSlidersettings}>
                {servicescontent.map((servicescontent, serindex) => (
                  <Link href={servicescontent.link} className="slideCard">
                   <div className="card_heading">
                   <div className="slide_Img">
                      <Image src={servicescontent.img} alt="service image" width={80} height={80} />
                    </div>
                    <h2>{servicescontent.heading}</h2>
                   </div>
                    <p>{servicescontent.description}</p>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* ROI new section */}
      <section className="roi_wrapper">
        <div className="container">
          <div className="roi_Box">
            <div className="roi_Inner">
              <div className="roi_content">
                <div className="section_heading">
                  <h2>Best ROIs</h2>
                  <p>Aspen Nexus; a tech driven company bringing you all the solutions, be it store setup, automations or selling digital products online through eye catching web designs, our experts use updated technology and tools to help you grow</p>
                </div>
              </div>
              <div className="roi_pricing" ref={counterRef}>
                {[
                  { amount: 2862440, label: 'Generated In Revenue For Our Client (So Far)' },
                  { amount: 1753300, label: 'Spent On Google & Facebook Advertising' },
                  { amount: 23453, label: 'Savings Realized' },
                ].map((item, index) => (
                  <div className="roi_counter" key={index}>
                    <h3>
                      {isInView ? <CountUp start={0} end={item.amount} duration={2.5} separator="," prefix="$" /> : '€0'}
                    </h3>
                    <h5>{item.label}</h5>
                  </div>
                ))}
              </div>
              <div className="roi_Tel">
                <p>
                  <span>Say Hi!</span> <a href={`tel:${+923209455811}`}>+92 320 9455811</a>
                </p>
              </div>
            </div>
            <div className="roi_Info">
              <div className="roi_Card">
                <div className="roi_Icon">
                  <FontAwesomeIcon icon={faArrowUpRightDots} />
                </div>
                <div className="roi_Content">
                  <h2>Cost Optimization</h2>
                  <p>We streamline operations,
                    automate processes, and renegotiate vendor
                    contracts to reduce costs and improve
                    efficiency, enabling higher profitability.</p>
                </div>
              </div>
              <div className="roi_Card">
                <div className="roi_Icon">
                  <FontAwesomeIcon icon={faArrowUpRightDots} />
                </div>
                <div className="roi_Content">
                  <h2>Customer Retention & Engagement</h2>
                  <p>By
                    leveraging data analytics, we personalize
                    customer experiences, create loyalty
                    programs, and enhance support to increase
                    retention and lifetime value, boosting ROI.</p>
                </div>
              </div>
              <div className="roi_Card">
                <div className="roi_Icon">
                  <FontAwesomeIcon icon={faArrowUpRightDots} />
                </div>
                <div className="roi_Content">
                  <h2>Market Expansion</h2>
                  <p> We identify high-potential markets and
                    execute targeted strategies to help businesses expand,
                    ensuring successful entry and maximized revenue streams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section slideshow on home */}
      <section className="gallery_wrapper sectionSpace">
        <div className="container gallery_inner">
          <div className="containerText">
            <h3>See The Results</h3>
            <h2>Our Success is
              Your Success
            </h2>
          </div>
          <div className="cont_btn">
            <p>At Aspen Nexus we define our success by the success of our clients. We take pride in
              fostering long-term partnerships and helping businesses of all sizes achieve their ecommerce goals. Whether it's launching a new brand, scaling existing operations, or
              increasing profitability, we're here to empower you to thrive in the ever-evolving online
              marketplace.</p>
            <Link className="btn4" href={"/contact"}>Book a Free Consultation</Link>
          </div>
        </div>
        <div className='container gallery_Holder'>
          <Gallery />
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="sectionSpace" id="faq">
        <div className="container">
          <div className="section_heading">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq_wrapper">
            <div className="faq_Holder">
              <FAQ />
            </div>
            <div className="faqImage">
              <Image src={faqImage} alt="faqImage" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Homepage;
