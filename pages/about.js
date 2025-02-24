"use client";
import React, { useState, useRef } from "react";
import Header from "../src/app/Components/Header";
import useInView from "../src/app/Hooks/useInView";
import "./service.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'
import styles from "../src/app/page.module.css";
import "../src/app/globals.css";
import "./about.scss";
import Image from "next/image";
import banner from "../public/Images/Marketing/mrk1.png";
import "./homepage.scss";
import CountUp from "react-countup";
import FAQ from "../src/app/Components/FAQ";
import faqImage from "../public/Images/faq.jpg";
import Footer from "../src/app/Components/Footer";


function about() {
   const counterRef = useRef(null);
   const isInView = useInView(counterRef);
  return (
    <div>
      <Header />
      <div className="About-section">
        <div className="container">
          <div className="about_banner">
            <div className="banner_img">
              <Image src={banner} alt="about_img" width={600} height={380} />
            </div>
            <div className="banner_content">
              <h1>Get to know us!</h1>
              <p>
                {" "}
                Aspen Nexus is a tech driven ecommerce automation and IT company
                providing you with expertlevel automations with a touch
                oftechnology. We not only setup and run online stores but also
                represent your store’s products in a visually appealing
                mannerthrough ourtop-notch website designs.
              </p>
              <a href={"/contact"} className="btn btn-over">
                GET STARTED TODAY
              </a>
            </div>
          </div>
          <div className="section_banner">
            <h1>OUR MISSION</h1>
            <h1>BRINGING YOU INNOVATIVE SOLUTIONS TO BOOST SALES!</h1>
            <p>
              We empower businesses with innovative strategies and functionality
              in the vast marketplace. Ourteam is crafted with hands on
              experience ofthe community hence aim to share that experience
              through our personalized services.
            </p>
          </div>
        </div>
        <section className="roi_wrapper">
          <div className="container">
            <div className="roi_Box">
              <div className="roi_Inner">
                <div className="roi_content">
                  <div className="section_heading">
                    <h2>Best ROIs</h2>
                    <p>
                      Aspen Nexus; a tech driven company bringing you all the
                      solutions, be it store setup, automations or selling
                      digital products online through eye catching web designs,
                      our experts use updated technology and tools to help you
                      grow
                    </p>
                  </div>
                </div>
                <div className="roi_pricing" ref={counterRef}>
                  {[
                    {
                      amount: 2862440,
                      label: "Generated In Revenue For Our Client (So Far)",
                    },
                    {
                      amount: 1753300,
                      label: "Spent On Google & Facebook Advertising",
                    },
                    { amount: 23453, label: "Savings Realized" },
                  ].map((item, index) => (
                    <div className="roi_counter" key={index}>
                      <h3>
                        {isInView ? (
                          <CountUp
                            start={0}
                            end={item.amount}
                            duration={2.5}
                            separator=","
                            prefix="$"
                          />
                        ) : (
                          "€0"
                        )}
                      </h3>
                      <h5>{item.label}</h5>
                    </div>
                  ))}
                </div>
                <div className="roi_Tel">
                  <p>
                    <span>Say Hi!</span>{" "}
                    <a href={`tel:${+923209455811}`}>+92 320 9455811</a>
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
                    <p>
                      We streamline operations, automate processes, and
                      renegotiate vendor contracts to reduce costs and improve
                      efficiency, enabling higher profitability.
                    </p>
                  </div>
                </div>
                <div className="roi_Card">
                  <div className="roi_Icon">
                    <FontAwesomeIcon icon={faArrowUpRightDots} />
                  </div>
                  <div className="roi_Content">
                    <h2>Customer Retention & Engagement</h2>
                    <p>
                      By leveraging data analytics, we personalize customer
                      experiences, create loyalty programs, and enhance support
                      to increase retention and lifetime value, boosting ROI.
                    </p>
                  </div>
                </div>
                <div className="roi_Card">
                  <div className="roi_Icon">
                    <FontAwesomeIcon icon={faArrowUpRightDots} />
                  </div>
                  <div className="roi_Content">
                    <h2>Market Expansion</h2>
                    <p>
                      {" "}
                      We identify high-potential markets and execute targeted
                      strategies to help businesses expand, ensuring successful
                      entry and maximized revenue streams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about_exp">
          <h1>OUR EXPERTISE:
          </h1>
          <ul>
            <li>Best marketing strategists to carry your ad campaigns</li>
            <li>Experts analyzing the trending products and sourcing them.</li>
            <li>Providing you with an innovative and functional website thatruns smoothly anywhere.</li>
            <li>Showcasing your brand’s identity and vision through optimized content on your site and relevant content on social
            media platforms.</li>
          </ul>
          
        </div>
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
      </div>
      <Footer/>
    </div>
  );
}

export default about;
