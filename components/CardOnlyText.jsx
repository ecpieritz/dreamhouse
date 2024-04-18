import styles from "../styles/cardOnlyText.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CardOnlyText(props) {
  return (
    <div className="col-md-4">
      <div className={styles.cardText}>
        <h5>{props.title}</h5>

        <p>{props.text}</p>

  <Link className="text-btn" href={props.link}>
    More About
    <Image
            src="/imgs/icons/dh-icons--right-arrow.png"
            alt="arrow"
            width={20}
            height={18}
          />
  </Link>
      </div>
    </div>
  );
}