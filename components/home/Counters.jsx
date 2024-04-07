import Counter from "../Counter";
import styles from "../../styles/Counters.module.css";

export default function HomeCounters() {
  return (
    <section className={styles.dhCounters}>
      <div className="row text-center">
        <Counter number="12" text="Years Of Experience" />
        <Counter number="1074" text="Success Projects" />
        <Counter number="98" text="Active Projects" />
        <Counter number="583" text="Happy Customers" />
      </div>
    </section>
  );
}