import Image from "next/image";
import styles from "./page.module.css";
// import Contact from "../../pages/contact";
import Homepage from "../../pages/homepage";
import Service from "../../pages/service";
import Header from "./Components/Header";
import Footer from './Components/Footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Homepage />
        {/* <Service /> */}
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  );
}
