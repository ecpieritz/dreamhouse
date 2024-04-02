import styles from "../styles/cardTestimonial.module.css";
import Image from "next/image";

export default function CardTestimonial(props) {
  return (
    <div className="col-md-4">
      <div className={styles.cardTestimonial}>
        <div className="row mb-3 d-flex align-items-center">
          <div className="col-3">
            <Image
              src={props.link}
              alt="person"
              width={60}
              height={60}
            />
          </div>

          <div className="col-9">
            <p className={styles.cardName}>{props.name}</p>

            <p className={styles.cardLocation}>{props.location}</p>
          </div>
        </div>

        <p className={styles.cardText}>{props.text}</p>
      </div>
    </div>
  );
}
