import React from "react";
import Header from "../src/app/Components/Header";
import Footer from "../src/app/Components/Footer";
import Image from "next/image";
import styles from "../src/app/page.module.css";
import "../src/app/globals.css";
import "./common.scss";
import faqImage from "../public/Images/faq.jpg";
import serviceNav1 from "../public/Images/serviceNav2.svg";
import Testimonials from "../src/app/Components/Testimonials";
import FAQ from "../src/app/Components/FAQ";
import amz1 from "../public/Images/Amazon/amz1.png";
import amz2 from "../public/Images/Amazon/amz2.png";
import amz3 from "../public/Images/Amazon/amz3.png";
import amz4 from "../public/Images/Amazon/amz4.png";
import amz5 from "../public/Images/Amazon/amz5.png";
import amz6 from "../public/Images/Amazon/amz6.png";
import amz7 from "../public/Images/Amazon/amz7.png";
import amz8 from "../public/Images/Amazon/amz8.png";
import amz9 from "../public/Images/Amazon/amz9.png";
import amz10 from "../public/Images/Amazon/amz10.png";

export default function amazon() {
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
                  <h2 className="mt-1">
                    Creating stores, digital products and websites to take your
                    business to the nextlevel!
                  </h2>
                  <h1>AMAZON AUTOMATION</h1>
                  <p>
                    At Aspen Nexus, we provide Amazon Automation Services to
                    help entrepreneurs and business owners build, manage, and
                    scale successful Amazon stores—without the hassle of
                    day-to-day operations.
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={amz1} height={480} width={320} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>AMAZON AUTOMATION</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Product Sourcing & Negotiations</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz2} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Our expertteam comes up with a high demand product and
                    secure the best possible deals through our extensive network
                    of suppliers. We maximize your profit by ensuring quality
                    products atreasonable and competitive prices.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Inventory Management & Replenishment</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    With Aspen Nexus, you will neverrun out of your stock. Make
                    stocking and restocking easy with our smartinventory
                    management; monitoring stock levels and automating
                    replenishmentto help business run smoothly
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Amazon Listing Creation & Optimization</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Get our experts to help you with high converting amazon
                    listings and drive greatreturns through ourin-depth data
                    analysis and keyword research. Ourteam crafts product
                    descriptions that are optimized ensuring high ranking
                    products.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Order Fulfillment & Customer Service</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Let us automate everything from order processing, shipping
                    and returns. Our dedicated customer care team helps resolve
                    any query effectively and makes sure the customeris
                    satisfied.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Exclusive Discount Optimization</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={amz10} alt="alt" />
                    </div>
                  </div>
                  <p>
                    At Aspen Nexus, we help businesses maximize sales with
                    strategic discount and promotion services on Amazon. Our
                    team expertly manages coupon deals, lightning deals, and
                    promotions to boost visibility, increase conversions, and
                    drive repeat customers—ensuring you get the most out of
                    every sale.
                  </p>
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

                    <button className="button">Get Started</button>
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

                    <button className="button button--pink">Get Started</button>
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

                    <button className="button button--white">
                      Get Started
                    </button>
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
