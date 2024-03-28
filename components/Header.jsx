import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.dhHeader}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/imgs/dh-logo.png" width={225} height={50} alt="Logo" />
        </Link>
      </div>

      <div className={styles.links}>
        <CustomLink href="/" currentPath={currentPath}>
          Home
        </CustomLink>
        <CustomLink href="/about" currentPath={currentPath}>
          About
        </CustomLink>
        <CustomLink href="/services" currentPath={currentPath}>
          Services
        </CustomLink>
        <CustomLink href="/prices" currentPath={currentPath}>
          Prices
        </CustomLink>
        <CustomLink href="/projects" currentPath={currentPath}>
          Projects
        </CustomLink>
        <CustomLink href="/contact" currentPath={currentPath}>
          Contact
        </CustomLink>
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.menuButton} onClick={toggleMenu}>
          <Image src="/imgs/icons/dh-icons--menu.png" width={25} height={25} />
        </div>

        {/* Renderização condicional dos links */}
        {isMenuOpen && (
          <div className={styles.linksOpen}>
            <CustomLink href="/" currentPath={currentPath}>
              Home
            </CustomLink>
            <CustomLink href="/about" currentPath={currentPath}>
              About
            </CustomLink>
            <CustomLink href="/services" currentPath={currentPath}>
              Services
            </CustomLink>
            <CustomLink href="/prices" currentPath={currentPath}>
              Prices
            </CustomLink>
            <CustomLink href="/projects" currentPath={currentPath}>
              Projects
            </CustomLink>
            <CustomLink href="/contact" currentPath={currentPath}>
              Contact
            </CustomLink>
          </div>
        )}
      </div>
    </header>
  );
}

function CustomLink({ href, currentPath, children }) {
  const isActive = href === currentPath;
  return (
    <Link href={href} className={isActive ? styles.active : ""}>
      {children}
    </Link>
  );
}
