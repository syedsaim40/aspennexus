import React from 'react';
import Header from "../src/app/Components/Header";
import Footer from '../src/app/Components/Footer';
import Strategy from "../public/Images/Strategy.png";
import Marketing from "../public/Images/Marketing.png";
import Design from "../public/Images/Design.png";
import Development from "../public/Images/Development.png";
import Image from "next/image";
import styles from "../src/app/page.module.css";
import "../src/app/globals.css";
import "./common.scss"

export default function development() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section>
       <div className="mainHeading">
       <div className="serviceHeading">
              <div className="container">
              <p>OUR SERVICES</p>
              <h2>From proof of concepts and to complex systems of an enterprise-level – we’ve got everything covered.</h2>
              </div>
            </div>
       </div>
          <div className="container">
            <div className="section">
              <div className="contentSection">
                <h1>Strategy services</h1>
                <h3>
                  We fuel the growth of purpose driven brands through strategy
                  activation, design empowerment, and market adoption. From
                  cultivating new ideas to connecting the dots for customers or
                  users, these are our core principles.
                </h3>
                <div className="serviceDetail">
                  <p>━ Market research</p>
                  <p>━ Automation</p>
                  <p>━ CRM & Sale funnel strategy</p>
                  <p>━ UX consulting</p>
                  <p>━ Brand positioning & messaging</p>
                  <p>━ Marketing strategy</p>
                </div>
              </div>
              <div className="contentImage">
                <Image src={Strategy} alt="alt" />
              </div>
            </div>
            <div className="section">
              <div className="contentImage">
                <Image src={Marketing} alt="alt" />
              </div>
              <div className="contentSection2">
                <h1>Marketing services</h1>
                <h3>
                  Reality is a new reality. With a well-built digital strategy we
                  leverage this stellar tech to propel your brand forward.
                </h3>
                <div className="serviceDetail">
                  <p>━ Digital marketing campaigns</p>
                  <p>━ Content creation</p>
                  <p>━ Lead nurturing</p>
                  <p>━ Branding</p>
                  <p>━ Marketing personas</p>
                  <p>━ SEO</p>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="contentSection">
                <h1>Design services</h1>
                <h3>
                  We design digital platforms to empower users and your brand's
                  tribe. This deep understanding of what motivates them allows us to
                  forge and fine-tune the most powerful strategies that generate
                  rapid ROI for your business.
                </h3>
                <div className="serviceDetail">
                  <p>━ User testing & personas</p>
                  <p>━ UI/UX Design</p>
                  <p>━ Wireframing and prototyping</p>
                  <p>━ Graphic print design</p>
                  <p>━ Website design</p>
                  <p>━ Animations</p>
                </div>
              </div>
              <div className="contentImage">
                <Image src={Design} alt="alt" />
              </div>
            </div>
            <div className="section">
              <div className="contentImage">
                <Image src={Development} alt="alt" />
              </div>
              <div className="contentSection2">
                <h1>Development services</h1>
                <h3>
                  Together, we define, develop, and deliver different design
                  solutions that create an unparalleled competitive advantage for
                  Web3 companies in a sea of competition.
                </h3>
                <div className="serviceDetail">
                  <p>━ Website maintenance and hosting</p>
                  <p>━ Website building</p>
                  <p>━ Platform and data migration</p>
                  <p>━ CRM implementation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
