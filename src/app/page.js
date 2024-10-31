import Image from "next/image";
import styles from "./page.module.css";
import Contact from "../../pages/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Contact />
      </main>
    </div>
  );
}
