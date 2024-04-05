import styles from "../styles/cardImages.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CardImages(props) {
  return (
    <div className="col-md-5 mb-5">
      <div className={styles.cardImages}>
        <div className={styles.cardTopImg}>
          <Image
            src={props.link}
            alt="project"
            width={300}
            height={600}
          />
        </div>

        <div className="row mt-3 align-items-center">
          <div className="col-10">
            <p className={styles.cardName}>{props.projectName}</p>
            <p className={styles.cardDetail}>{props.detail}</p>
          </div>
          <div className="col-2 p-0">
            <Link href='/projects' className={styles.primaryBtn}><span>&gt;</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
