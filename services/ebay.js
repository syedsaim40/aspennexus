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

import ebay1 from "../public/Images/Ebay/ebay1.png";
import ebay2 from "../public/Images/Ebay/ebay2.png";
import ebay3 from "../public/Images/Ebay/ebay3.png";
import ebay4 from "../public/Images/Ebay/ebay4.png";
import ebay5 from "../public/Images/Ebay/ebay5.png";
import ebay6 from "../public/Images/Ebay/ebay6.png";
import ebay7 from "../public/Images/Ebay/ebay7.png";
import ebay8 from "../public/Images/Ebay/ebay8.png";
import ebay9 from "../public/Images/Ebay/ebay9.png";
import ebay10 from "../public/Images/Ebay/ebay10.png";

export default function etsy() {
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
                <h1>EBAY AUTOMATION </h1>
                  <h2>
                  Managing listings, inventory, and customer inquiries can drain resources and distract from core business goals.
                  </h2>
                
                  <p>
                    Enhance Growth and Profitability with Professional eBay
                    Consulting. Our end-to-end services are crafted to increase
                    sales, promote sustainable development, and elevate your
                    eBay store into a successful and thriving business.
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={ebay1} height={480} width={320} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>EBAY AUTOMATION </h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>EBay Competitor</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay2} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    eBay competitor research involves analyzing other sellers on
                    the platform to understand their strategies, strengths, and
                    weaknesses. This includes examining their product listings,
                    pricing, customer reviews, and marketing tactics. The
                    insights gained help in identifying market trends,
                    optimizing your own listings, and developing strategies to
                    outperform competitors and capture a larger market share.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Product Sourcing and Posting</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We list handpicked SEO optimized products that are highly
                    sought after and profitable, ensuring a better ranking on
                    eBay search results.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Marketing Strategies</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay7} alt="alt" />
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
                  <h2>Product Order Fulfilment</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We take full control of order management ensuring fast
                    shipping, order tracking, and return processing. Forget the
                    need to be constantly involved in your project.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Process Automation</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay3} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay4} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Our advanced automation AI handles the mundane tasks while
                    freeing you to focus on the higher level strategic thinking
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Dedicated Customer Support</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay10} alt="alt" />
                    </div>
                  </div>
                  <p>
                  Your buyers are in good hands! Our team ensures timely responses to inquiries, handles returns, and maintains excellent feedback to protect your reputation.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Real-Time Analytics & Insights</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay5} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={ebay8} alt="alt" />
                    </div>
                  </div>
                  <p>
                  Get detailed insights into your store’s performance, including sales, revenue, and profit margins, so you can make informed decisions effortlessly.
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
