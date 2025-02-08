import React from 'react'
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

export default function shopify() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
      </main>
    </div>  )
}
