import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.dhFooter}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link className={styles.dhLogo} href="/">
              <Image
                src="/imgs/dh-logo.png"
                width={225}
                height={50}
                alt="Logo"
              />
            </Link>
            <p>
              Discover how our interior design experts can transform your space
              into something truly extraordinary.
            </p>

            <div className={styles.dhSocials}>
              <Link href="/">
                <Image
                  src="/imgs/icons/dh-icons--facebook.png"
                  width={30}
                  height={30}
                  alt="facebook"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/imgs/icons/dh-icons--linkedin.png"
                  width={30}
                  height={30}
                  alt="linkedin"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/imgs/icons/dh-icons--instagram.png"
                  width={30}
                  height={30}
                  alt="instagram"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-2">
            <h4 className={styles.dhTitle}>Pages</h4>

            <div className={styles.dhPages}>
              <Link className={styles.dhLinks} href="/about">
                About
              </Link>
              <Link className={styles.dhLinks} href="/services">
                Services
              </Link>
              <Link className={styles.dhLinks} href="/prices">
                Prices
              </Link>
              <Link className={styles.dhLinks} href="/projects">
                Projects
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className={styles.dhTitle}>Services</h4>

            <div className={styles.dhServices}>
              <p>Design Consultation</p>
              <p>Layout Design</p>
              <p>Project Management</p>
              <p>Renovation and Remodeling</p>
              <p>Space Planning</p>
              <p>Sustainable Solutions</p>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className={styles.dhTitle}>Contact</h4>

            <div className={styles.dhContact}>
              <p>5th street, Maguari District</p>
              <p>Ananindeua/PA, Brazil</p>
              <Link
                className={styles.dhLinks}
                href="mailto:contact@dreamhouse.design"
              >
                contact@dreamhouse.design
              </Link>
              <Link className={styles.dhLinks} href="tel:+5591987654321">
                +55 91 98765-4321
              </Link>
            </div>
          </div>
          <div className="col-12">
            <p className={styles.dhMadeBy}>
            Made with 💛 by
            <Link className={styles.dhMadeByLink} href="https://github.com/ecpieritz">Emilyn Pieritz</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
