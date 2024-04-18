import styles from "../styles/sectionImageText.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SectionImageText(props) {
  return (
    <section className={styles.dhImageText}>
      <div className="row">
        <div className="col-md-7">
          <h2>{props.title}</h2>
          <p>{props.text}</p>

          <Link href={props.link}>
            {props.textBtn}
            <Image
              src={props.imgSrc}
              alt={props.imgAlt}
              width={600}
              height={250}
            />
          </Link>
        </div>

        <div className="col-md-5">
            <Image
              src={props.imgSrc}
              alt={props.imgAlt}
              width={600}
              height={250}
            />
        </div>
      </div>
    </section>
  );
}