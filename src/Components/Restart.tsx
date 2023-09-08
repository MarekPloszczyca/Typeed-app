import { MouseEventHandler } from "react";
import styles from "./Restart.module.scss";

interface Props {
  type: MouseEventHandler;
}
export default function Restart(props: Props) {
  return (
    <div className={styles.restart}>
      <p>Restart?</p>
      <div>
        <button className={styles.green} onClick={props.type}>
          &#x2713;
        </button>
        <button className={styles.red} onClick={props.type}>
          &#10006;
        </button>
      </div>
    </div>
  );
}
