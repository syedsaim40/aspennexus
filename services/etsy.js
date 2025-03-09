import React from "react";
import Header from "../src/app/Components/Header";
import Footer from "../src/app/Components/Footer";
import Strategy from "../public/Images/Strategy.png";
import Marketing from "../public/Images/Marketing.png";
import Design from "../public/Images/Design.png";
import Development from "../public/Images/Development.png";
import Image from "next/image";
import styles from "../src/app/page.module.css";
import "../src/app/globals.css";
import "./common.scss";
import Testimonials from "../src/app/Components/Testimonials";
import FAQ from "../src/app/Components/FAQ";
import faqImage from "../public/Images/faq.jpg";
import serviceNav1 from "../public/Images/serviceNav2.svg";
import dev1 from "../public/Images/development/dev1.png";
import dev2 from "../public/Images/development/dev2.png";
import dev3 from "../public/Images/development/dev3.png";
import dev4 from "../public/Images/development/dev4.png";
import dev5 from "../public/Images/development/dev5.png";
import dev6 from "../public/Images/development/dev6.png";
import dev7 from "../public/Images/development/dev7.png";
import dev8 from "../public/Images/development/dev8.png";
import dev9 from "../public/Images/development/dev9.png";
import dev10 from "../public/Images/development/dev10.png";

export default function ebay() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="service_Header">
          <Header />
        </div>
        <section>
          <div className="service_Holder">
            <div className="container">
              <div className="service_banner">
                <div className="service_content">
                <h1>ETSY AUTOMATION</h1>
                  <h2>
                  We handle everything from listings to fulfillment, so you can focus on growing your business.
                  </h2>
                
                  <p>
                    At Aspen Nexus,Etsy Automation simplifies your shop
                    management by handling listings, order fulfillment, and
                    daily operations, allowing you to focus on growing your
                    brand and maximizing sales effortlessly.
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={dev10} height={480} width={320} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>ETSY AUTOMATION</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Store Setup & Optimization</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev2} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We create a standout Etsy shop that attracts and converts
                    visitors. From a user-friendly layout and keyword-optimized
                    descriptions to high-quality images and clear policies, we
                    set you up for success.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Winning Product Research & Listings</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We use advanced tools to identify trending products,
                    optimize pricing strategies, and create compelling listings
                    with attention-grabbing titles, descriptions, and tags to
                    boost visibility and sales.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Seamless Order Management</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Manually processing orders takes up valuable time—but we’ll
                    automate the entire order process for you. From tracking
                    sales to ensuring timely delivery, we’ll make sure
                    everything runs smoothly behind the scenes.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Marketing & Promotions That Work</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We boost your shop’s visibility with targeted Etsy Ads,
                    strategic discounts, seasonal promotions, and social media
                    tactics to drive traffic and maximize sales.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Automated Inventory Management</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={dev10} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Stay stocked and stress-free with real-time tracking,
                    low-stock alerts, and automatic Etsy updates—so you never
                    oversell or run out of inventory again.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Why Choose Aspen Nexus for EBAY Automation?</h2>
                </div>
                <div className="nav_Content">
                  <ul>
                    <li>Tailored Solutions and services thatfit your needs.</li>
                    <li>
                      Efficiency & Scalability through automated processes.
                    </li>
                    <li>Expert Support offering services 24/7.</li>
                    <li>Proven Results.</li>
                    <p>
                      Partner with Aspen Nexus and enjoy hassle free returns!
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <section className="plans__container">
              <div className="plans">
                <div className="plansHero">
                  <h1 className="plansHero__title">
                    Simple, transparent pricing
                  </h1>
                  <p className="plansHero__subtitle">
                    No contracts. No suprise fees.
                  </p>
                </div>
                <div className="planItem__container">
                  <div className="planItem planItem--free">
                    <div className="card">
                      <div className="card__header">
                        <div className="card__icon symbol symbol--rounded"></div>
                        <h2>Free</h2>
                      </div>
                      <div className="card__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                      </div>
                    </div>

                    <div className="price">
                      $0<span>/ month</span>
                    </div>

                    <ul className="featureList">
                      <li>2 links</li>
                      <li>Own analytics platform</li>
                      <li className="disabled">Chat support</li>
                      <li className="disabled">Mobile application</li>
                      <li className="disabled">Unlimited users</li>
                    </ul>

                    <a href="/contact" className="button">Get Started</a>
                  </div>
                  <div className="planItem planItem--pro">
                    <div className="card">
                      <div className="card__header">
                        <div className="card__icon symbol"></div>
                        <h2>Pro</h2>
                        <div className="card__label label">Best Value</div>
                      </div>
                      <div className="card__desc">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris
                      </div>
                    </div>

                    <div className="price">
                      $18<span>/ month</span>
                    </div>

                    <ul className="featureList">
                      <li>2 links</li>
                      <li>Own analytics platform</li>
                      <li>Chat support</li>
                      <li className="disabled">Mobile application</li>
                      <li className="disabled">Unlimited users</li>
                    </ul>

                    <a href="/contact" className="button button--pink">Get Started</a>
                  </div>

                  <div className="planItem planItem--entp">
                    <div className="card">
                      <div className="card__header">
                        <div className="card__icon"></div>
                        <h2>Enterprise</h2>
                      </div>
                      <div className="card__desc">
                        Nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor
                      </div>
                    </div>

                    <div className="price">Let's Talk</div>

                    <ul className="featureList">
                      <li>2 links</li>
                      <li>Own analytics platform</li>
                      <li>Chat support</li>
                      <li>Mobile application</li>
                      <li>Unlimited users</li>
                      <li>Customize Panel</li>
                    </ul>

                    <a href="/contact" className="button button--white">Get Started</a>
                  </div>
                </div>
              </div>
            </section>
            <Testimonials />
            <div className="container faq_Wrap">
              <FAQ />
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
