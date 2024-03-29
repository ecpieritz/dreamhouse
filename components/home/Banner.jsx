import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className={styles.homeBanner} style={{backgroundImage: "url('/imgs/dh-home--banner.png')"}}>
      <h1>Let's make your home beautiful together</h1>

      <p>Discover how our interior design experts can transform your space into something truly extraordinary.</p>

      <Link href="/services">Get Started</Link>
    </div>
  );
}
