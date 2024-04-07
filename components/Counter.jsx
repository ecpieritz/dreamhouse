import { useState, useEffect } from "react";
import styles from "../styles/Counters.module.css";

export default function Counter(props) {

  return (
    <div className="col-md-3 col-sm-6">
      <div className={styles.dhCounter}>
        <h2>{props.number}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
