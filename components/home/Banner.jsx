import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className={styles.homeBanner} style={{backgroundImage: "url('/imgs/dh-home--banner.png')"}}>
      <h1>Let's make your <br className="mob-none"/>home beautiful together</h1>

      <p>Discover how our interior design experts can transform your space into something truly extraordinary.</p>

      <Link className="primary-btn" href="/services">
        Get Started
        <Image
          src='/imgs/icons/dh-icons--right-arrow-white.png'
          alt='arrow'
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
