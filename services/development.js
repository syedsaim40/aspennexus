"use client";
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
import faqImage from "../public/Images/faq.jpg";
import serviceNav1 from "../public/Images/serviceNav2.svg";
import Testimonials from "../src/app/Components/Testimonials";
import FAQ from "../src/app/Components/FAQ";
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

export default function development() {
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
                  <h2>
                    Making businesses standout with ourtailored web development
                    services!
                  </h2>
                  <h1>WEB DEVELOPMENT</h1>
                  <p>
                    At Aspen Nexus, our experts craft your digital presence with
                    functional and cutting-edge web development services. Our
                    team ensures your website meets the latesttrends & needs and
                    stays on top in the dynamic market.
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
                <h1>Webiste Development</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>CMS Web Development</h2>
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
                    Make content management easy with our custom-built CMS
                    platforms designed to empower businesses online. From Joomla
                    to WordPress, our CMS services offertailored solutions to
                    meet your needs and streamline updates so you can have full
                    control over your website.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>B2C Web Development</h2>
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
                    Offering visually appealing and engaging B2C websites to
                    attract your customers. Our services caterto every kind of
                    customer, helping you target your desired audience. We drive
                    conversions by creating userfriendly interfaces.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>PHP Web Development</h2>
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
                    We offerrobust and feature rich web solutions by leveraging
                    PHP frameworks like Laravel and CodeIgniter, providing you
                    seamless functionality from custom applications to dynamic
                    websites
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>WordPress Web Development</h2>
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
                    From a simple blog to a complex ecommerce platform, we
                    unlock the potential of your website with our WordPress web
                    development services. Our experts help you build a site
                    thatis both secured and fully optimized for search engines.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>B2B Portal Development</h2>
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
                    We transform your business with a customized B2B portal. We
                    promote efficiency and fosterlong term partnerships by
                    developing platforms that streamline interactions.
                    Whetheritis order management system or product catalogues,
                    we provide tailored portals meeting your needs.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>We Offer</h2>
                </div>
                <div className="nav_Content">
                  <ul>
                    <li>Custom Solutions: Tailored to your needs.</li>
                    <li>Responsive Designs: Compatible for all devices.</li>
                    <li>
                      SEO-Friendly Platforms: Elevate your visibility online. .
                    </li>
                    <li>
                      Ongoing Support: Dedicated customer service and updates.
                    </li>
                    <p>
                      “Have queries about web development services? Connect with
                      Aspen Nexus today; where innovation meets functionality!”
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
