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
import mrk1 from "../public/Images/Marketing/mrk1.png";
import mrk2 from "../public/Images/Marketing/mrk2.png";
import mrk3 from "../public/Images/Marketing/mrk3.png";
import mrk4 from "../public/Images/Marketing/mrk4.png";
import mrk5 from "../public/Images/Marketing/mrk5.png";
import mrk6 from "../public/Images/Marketing/mrk6.png";
import mrk7 from "../public/Images/Marketing/mrk7.png";
import mrk8 from "../public/Images/Marketing/mrk8.png";
import mrk9 from "../public/Images/Marketing/mrk9.png";
import mrk10 from "../public/Images/Marketing/mrk10.png";

export default function digitalMarketing() {
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
                <h1>DIGITAL MARKETING</h1>
                  <h2>
                    “Helping brands getin the spotlightthrough ourtargeted
                    marketing campaigns!”
                  </h2>
                
                  <p>
                    Offering you comprehensive digital marketing services that
                    drive sales and boost your brand’s image and presence. From
                    strategies to execution, ourtailored services help you meet
                    your business goals.
                  </p>
                  <a href={"/contact"} className="btn btn-over">
                    Book a free Consultation
                  </a>
                </div>
                <div className="service_image">
                  <Image src={mrk2} height={480} width={320} />
                </div>
              </div>
              <div className="nav_heading">
                <h2>Our Process to Kickstart Your</h2>
                <h1>DIGITAL MARKETING</h1>
                <p>Services</p>
              </div>
            </div>
            <div className="container service_Text">
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Pay-Per-Click Advertising (PPC)</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk3} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We design targeted PPC campaigns that maximize your ROIs and
                    ensure higher visibility. We cover everything from Google
                    Ads to social media platforms
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Search Engine Optimization (SEO)</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk4} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk5} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Dominate the search engine with our unique strategies and
                    keyword optimization. We drive organic traffic to your
                    website and enhance its visibility through our expert SEO
                    tools and technology ensuring a seamless experience.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Social Media Marketing</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Boosting your brand across platforms like Instagram,
                    Facebook,twitter and Linked In. Let our experts handle
                    allthe work from profile managementto campaigns execution so
                    you can focus on growing your business.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Email Marketing</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk8} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk9} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We design personalized email campaigns that keep your
                    customers engaged and updated. Be it promotions, newsletter
                    or re engagement emails, we encourage strong business
                    relationships and repeat business.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Content Marketing</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk1} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk10} alt="alt" />
                    </div>
                  </div>
                  <p>
                    Our services include infographics, blog writing, case
                    studies and more. We establish your brand to lead and to
                    attract your target audience with relevant content. Driving
                    traffic and increasing returns through our content marketing
                    skills.
                  </p>
                </div>
              </div>
              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Video Marketing</h2>
                </div>
                <div className="nav_Content">
                  <div className="nav_gallery">
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk6} alt="alt" />
                    </div>
                    <div className="nav_img rounded-lg object-cover">
                      <Image src={mrk7} alt="alt" />
                    </div>
                  </div>
                  <p>
                    We captivate the audience by catching theirinterestthrough
                    our creative video content. From tutorials and live streams
                    to reels and promotional videos, our services convey your
                    message effectively.
                  </p>
                </div>
              </div>

              <div className="service_Box">
                <div className="nav_Item">
                  <h2>Why Choose Aspen Nexus?</h2>
                </div>
                <div className="nav_Content">
                  <ul>
                    <li>Tailored Strategies for each ofthe campaigns.</li>
                    <li>
                      Data-Driven Approach through analyzing and optimizing
                      campaigns.
                    </li>
                    <li>
                      Full-Service Team handling allthe hassles from data
                      analytics to marketing.
                    </li>
                    <li>Proven Results.</li>
                    <p>
                      Aspen Nexus;the best digital marketing agency near
                      you!Join us and start your success story!
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
