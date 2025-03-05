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

import wal1 from "../public/Images/Walmart/wal1.png";
import wal2 from "../public/Images/Walmart/wal2.png";
import wal3 from "../public/Images/Walmart/wal3.png";
import wal4 from "../public/Images/Walmart/wal4.png";
import wal5 from "../public/Images/Walmart/wal5.png";
import wal6 from "../public/Images/Walmart/wal6.png";
import wal7 from "../public/Images/Walmart/wal7.png";
import wal8 from "../public/Images/Walmart/wal8.png";
import wal9 from "../public/Images/Walmart/wal9.png";
import wal10 from "../public/Images/Walmart/wal10.png";

export default function walmart() {
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
                    Achieve the highest level of e-commerce success with our
                    tailored Walmart services.
                  </h2>
                  <h1>WALLMART AUTOMATION </h1>
                  <p>
                    Aspen Nexus streamlines your Walmart store with automated
                    product sourcing, inventory management, buy box
                    optimization, sales generation, fulfillment, and marketing.
                    With ongoing support and scalable solutions, we help you
                    boost efficiency and maximize profits effortlessly.
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={wal10} height={480} width={320} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>WALLMART AUTOMATION</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Walmart Account Management</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal2} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Involves a range of tasks, including optimizing product
                    listings, managing inventory, processing orders, providing
                    customer service, and analyzing performance metrics. These
                    activities are crucial for ensuring efficient operations and
                    driving sales growth on the Walmart marketplace.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Customized StoreFront</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Personalized and tailored online store layout specifically
                    designed for the Walmart marketplace. This includes
                    customized product displays, and tailored navigation
                    features to enhance brand presentation, improve user
                    experience, and drive sales.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Product Listing Optimization</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Focuses on enhancing product listings to elevate visibility
                    and performance on e-commerce platforms. This process
                    involves refining product titles, descriptions, images,
                    keywords, and pricing to attract more customers, improve
                    search rankings, and increase conversions. The aim is to
                    make the product more appealing and easier for potential
                    buyers to find.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Why Choose Aspen Nexus?</h2>
                </div>
                <div className="nav_Content">
                  <ul>
                    <li>End-to-End Solutions tailored for sellers.</li>
                    <li>Data-Driven Strategies thatincrease sales.</li>
                    <li>Time-Saving Automation .</li>
                    <li>Proven Results.</li>
                    <p>
                      Join Aspen Nexus to automate your WALLMART to success!
                    </p>
                  </ul>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Labeling & Packaging</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    This process includes informative and attractive labels that
                    convey essential product details and developing packaging
                    that safeguards the product, enhances its visual appeal, and
                    meets regulatory requirements. Effective labeling and
                    packaging are vital for branding, differentiating products,
                    and improving the customer experience.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2> Hands-Free E-Commerce Growth</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={wal10} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We automates your Walmart store, handling product sourcing,
                    inventory, fulfillment, and marketing. Scale effortlessly
                    while we maximize efficiency and profits for you!
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
