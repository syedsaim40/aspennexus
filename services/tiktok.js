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

import tik1 from "../public/Images/Tiktok/tik1.png";
import tik2 from "../public/Images/Tiktok/tik2.png";
import tik3 from "../public/Images/Tiktok/tik3.png";
import tik4 from "../public/Images/Tiktok/tik4.png";
import tik5 from "../public/Images/Tiktok/tik5.png";
import tik6 from "../public/Images/Tiktok/tik6.png";
import tik7 from "../public/Images/Tiktok/tik7.png";
import tik8 from "../public/Images/Tiktok/tik8.png";
import tik9 from "../public/Images/Tiktok/tik9.png";
import tik10 from "../public/Images/Tiktok/tik10.png";

export default function tiktokAuto() {
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
                    ‘’Automate, innovate and dominate TikTok with Aspen Nexus!’’
                  </h2>
                  <h1>TIKTOK SHOP AUTOMATION</h1>
                  <p>
                    Aspen Nexus automates your TikTok Shop, handling product
                    sourcing, listing, fulfillment, and marketing—so you can
                    focus on growth while we drive sales!
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={tik10} height={480} width={320} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>TIKTOK SHOP AUTOMATION</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>TikTok Shop Account Setup</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik2} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We help you get started with our comprehensive account setup
                    services. We get your store ready be itthe registration or
                    optimizing your store front, Aspen Nexus handles allthe
                    work.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Product Listing & Management</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Stand out with creative and optimized productlistings. From
                    crafting compelling product descriptions to high quality
                    graphics to capture the users, we keep your product catalogs
                    organized and updated with our managementtools.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Creative Content Production</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Engage with your audience with visually stunning videos and
                    graphics that captivate your users to drive clicks and
                    views. We use graphics customized according to TikTok’s
                    trends so your products shine in front ofthe users.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Influencer Collaboration</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Use the power of influencer marketing and leverage your
                    TikTok shop with high engaging sponsored content. Ourteam
                    connects you with famous TikTok creators who amplify
                    yourreach and traffic and align with your brand’s vision.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Ad Campaign Management</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik10} alt="alt" />
                    </div>
                  </div>
                  <p>
                    From content optimization and targeting to ad creation and
                    budgeting, we ensure maximum ROI with our data driven ad
                    campaigns. Our Tik Tok advertisement skills help turn your
                    views into sales.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Performance Analysis & Reporting
                  </h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik2} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={tik9} alt="alt" />
                    </div>
                  </div>
                  <p>
                  We provide detailed analytics reports regularly tracking your store’s performance with key metrics and campaign results.
                  This approach helps you stay in control and make key decisions to improve continuously.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Why Choose Aspen Nexus for TikTok Shop Automation?</h2>
                </div>
                <div className="nav_Content">
                  <ul>
                    <li>Trend-Driven Strategies to stay ahead of Tik Tok trends.</li>
                    <li>
                    Comprehensive Services to manage everything from store setup to marketing and purchase.

                    </li>
                    <li>Audience Engagementthrough targeted solutions that drive sales.</li>
                    <li>Proven Results.</li>
                    <p>
                    Take your TikTok shop a step ahead with Aspen Nexus!
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
                        <h2>1 Month <br></br> Essential </h2>
                      </div>
                      <div className="card__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                      </div>
                    </div>

                    <div className="price">
                      $1300<span>/ month</span>
                    </div>

                    <ul className="featureList">
                      <li>TikTok Shop Account Setup</li>
                      <li>Basic Product Research (up to 5 products)</li>
                      <li>Initial Product Listing Optimization (up to 5 listings)</li>
                      <li>Store Launch Assistance</li>
                      <li>Basic Aftersales Support (1 month)</li>
                    </ul>

                    <a href="/contact" className="button">Get Started</a>
                  </div>
                  <div className="planItem planItem--pro">
                    <div className="card">
                      <div className="card__header">
                        <div className="card__icon symbol"></div>
                        <h2>3 MONTHS PLUS  </h2>
                        <div className="card__label label">Best Value</div>
                      </div>
                      <div className="card__desc">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris
                      </div>
                    </div>

                    <div className="price">
                      $1999<span>/ month</span>
                    </div>

                    <ul className="featureList">
                      <li>TikTok Shop Account Setup</li>
                      <li>Marketplace Approvals and Reseller Certificate Acquisition</li>
                      <li>Product Research (up to 10 products)</li>
                      <li>Advance Product Listing Optimization (up to 10 listings)</li>
                      <li>Pre-Marketing Strategies for TikTok</li>
                      <li>Store Launch and Inventory Management Support</li>
                      <li>Aftersales Support (3 months)</li>
                    </ul>

                    <a href="/contact" className="button button--pink">Get Started</a>
                  </div>

                  <div className="planItem planItem--entp">
                    <div className="card">
                      <div className="card__header">
                        <div className="card__icon"></div>
                        <h2>6 MONTHS PREMIUM </h2>
                      </div>
                      <div className="card__desc">
                        Nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor
                      </div>
                    </div>

                    <div className="price">  $4500<span>/ month</span></div>

                    <ul className="featureList">
                      <li>TikTok Shop Account Setup</li>
                      <li>Marketplace Approvals and Reseller Certificate Acquisition</li>
                      <li>Comprehensive Product Research (up to 15 products)</li>
                      <li>Full Product Listing Optimization (up to 15 listings)</li>
                      <li>Customized Pre-Marketing Strategies and Content Planning</li>
                      <li>Complete Store Launch, Inventory Management, and Order Fulfillment</li>
                      <li>Ongoing Aftersales Support (6 months)</li>
                      <li>Virtual Assistance for Marketing and Customer Engagement (3 month)</li>
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
