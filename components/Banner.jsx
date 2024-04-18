import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HomeBanner() {
  const [bannerImage, setBannerImage] = useState("/imgs/dh-home--banner.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 680) {
        setBannerImage("/imgs/dh-home--banner-mobile.png");
      } else {
        setBannerImage("/imgs/dh-home--banner.png");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.homeBanner} style={{backgroundImage: `url(${bannerImage})`}}>
      <h1>Let"s make your <br className="mob-none"/>home beautiful together</h1>

      <p>Discover how our interior design experts can transform your space into something truly extraordinary.</p>

      <Link className="primary-btn" href="#contact">
        Get Started
        <Image
          src="/imgs/icons/dh-icons--right-arrow-white.png"
          alt="arrow"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
