import styles from "../styles/ContactBanner.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ContactBanner() {
  return (
    <section id="contact" className={styles.dhContactBanner} style={{backgroundImage: `url("/imgs/dh-contact-bg.png")`}}>
      <div className="container">
      <h2>Get in Touch</h2>

      <h5>Reach out today and let"s start creating your dream space together.</h5>

      <Link className={styles.dhContactBtn} href="mailto:contact@dreamhouse.design">
        <span>Contact Whit Us</span>
        <Image
          src="/imgs/icons/dh-icons--right-arrow-white.png"
          alt="arrow"
          width={30}
          height={25}
        />
      </Link>
      </div>
    </section>
  );
}
