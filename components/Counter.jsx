import { useState, useEffect } from "react";
import styles from "../styles/Counters.module.css";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < props.number) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 10); // Ajuste o intervalo conforme necessário para a velocidade de contagem desejada
      
      return () => clearInterval(interval);
    }
  }, [count, props.number]);

  return (
    <div className="col-md-3 col-sm-6">
      <div className={styles.dhCounter}>
        <h2>{count}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
