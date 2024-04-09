import Image from "next/image";
import styles from "../styles/Banner.module.css";

export default function Banner(props) {
  return (
    <div className={styles.dhBanner}>
      <Image
            src={props.src}
            alt={props.alt}
            width={1800}
            height={370}
          />
    </div>
  );
}