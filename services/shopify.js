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
import shp1 from "../public/Images/Shopify/shp1.png";
import shp2 from "../public/Images/Shopify/shp2.png";
import shp3 from "../public/Images/Shopify/shp3.png";
import shp4 from "../public/Images/Shopify/shp4.png";
import shp5 from "../public/Images/Shopify/shp5.png";
import shp6 from "../public/Images/Shopify/shp6.png";
import shp7 from "../public/Images/Shopify/shp7.png";
import shp8 from "../public/Images/Shopify/shp8.png";
import shp9 from "../public/Images/Shopify/shp9.png";
import shp10 from "../public/Images/Shopify/shp10.png";

export default function shopifyAuto() {
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
                <h1>Shopify Automation</h1>
                  <h2>
                    ‘’Transforming stores into revenue generating powerhouses
                    with our automation services!’’
                  </h2>
                 
                  <p>
                    At Aspen Nexus, we specialize in building, optimizing, and
                    automating high-converting Shopify stores that help
                    businesses scale effortlessly.
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={shp2} height={480} width={370} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>Shopify Automation</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Product Research & Sourcing</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Our shopify drop shipping services unleash your brand’s
                    potential by sourcing the right products at competitive
                    prices, so high trending products with maximum potential
                    profit are ensured to meet your customer demands and
                    expectations.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Store Setup & Customization</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    From crafting a visually appealing store to ensuring a
                    seamless user experience, Aspen Nexus ensures a tailored
                    approach that aligns with your brand’s vision. Ourteam
                    designs eye catching and engaging layouts that convert users
                    to long term buyers.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Inventory Management & Updates</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Our automation tools are here to relieve you of your stock
                    related headaches. From monitoring inventory to update stock
                    levels, ourtechnology makes your store run swiftly.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Order Processing & Fulfillment</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We streamline your store operations focusing on smooth
                    orderfulfillment process and coordination to the suppliers.
                    Our systems include ordertracking and delivery, offering
                    users a hassle-free experience.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>SEO & Marketing Integration</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp10} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Enhance your store’s visibility through our effective SEO
                    and digital marketing strategies. We ensure your store
                    captures the target audience with our optimized content on
                    product pages and effective digital campaigns through social
                    media marketing and email marketing.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Customer Support Automation</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp9} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={shp7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Ourteam helps you stay responsive with our automated tools
                    like chatbots and ticketing systems, ensuring exceptional
                    customer service and strong customerrelationships.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Why Choose Aspen Nexus for Shopify Automation?</h2>
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
