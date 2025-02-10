import React from 'react'
import Header from "../src/app/Components/Header";
import Footer from '../src/app/Components/Footer';
import Image from "next/image";
import styles from "../src/app/page.module.css";
import "../src/app/globals.css";
import "./common.scss";
import faqImage from "../public/Images/faq.jpg";
import serviceNav1 from "../public/Images/serviceNav2.svg";

export default function shopify() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header/>
        <section>
          <div className='service_Holder'>
            <div className="container">
              <div className="service_banner">
                  <div className="service_content">
                    <h2>
                      Establishing frameworks that fuel triumph.
                    </h2>
                    <h1>Amazon Automation</h1>
                    <p>Take it to the next level with our Amazon marketing services. ECOM PINNACLE does all the work-from store creation to order management.</p>

                    <p> Setting up a profitable store that meets its customers’ needs is the first step in dominating the market. We, at ECOM PINNACLE handle everything from product listings to brand visibility</p>
                    <button className='btn btn-over'>Book a free Consultation</button>
                  </div>
                  <div className="service_image">
                    <Image src={faqImage} height={480} width={320} />
                  </div>
                </div>
                <div className="nav_heading">
                  <h2>Our Process to Kickstart Your</h2>
                  <h1>Shopify</h1>
                  <p>Services</p>
                </div>
            </div>
            <div className='container service_Text'>
              <div className='service_Box'>
                <div className='nav_Item'><h2>Planing</h2></div>
                <div className='nav_Content'>
                  <p>We work closely with you to understand your brand, target audience, and business objectives.</p>
                  {/* <div className="nav_gallery">
                      <div className="nav_img rounded-lg object-cover"><Image src={serviceNav1} alt="alt" /></div>
                      <div className="nav_img rounded-lg object-cover"><Image src={serviceNav2} alt="alt" /></div>
                      <div className="nav_img rounded-lg object-cover"><Image src={serviceNav3} alt="alt" /></div>
                      <div className="nav_img rounded-lg object-cover"><Image src={serviceNav4} alt="alt" /></div>
                  </div> */}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </div>)
}
