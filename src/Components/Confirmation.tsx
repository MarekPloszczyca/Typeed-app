import { MouseEventHandler } from "react";
import styles from "./Confirmation.module.scss";

interface Props {
  type: MouseEventHandler;
}

export default function Confirmation(props: Props) {
  return (
    <div className={styles.confirmation}>
      <p>Are you ready?</p>
      <div>
        <button className={styles.green} onClick={props.type} autoFocus>
          &#x2713;
        </button>
        <button className={styles.red} onClick={props.type}>
          &#10006;
        </button>
      </div>
    </div>
  );
}
