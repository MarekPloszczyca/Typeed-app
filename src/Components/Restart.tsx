import { MouseEventHandler } from "react";
import styles from "./Restart.module.scss";

interface Props {
  type: MouseEventHandler;
  score: number;
}

const buttonType = {
  accept: "\u{02713}",
  decline: "\u{2715}",
};
export default function Restart(props: Props) {
  return (
    <div className={styles.restart}>
      <p>Restart?</p>
      <p>Your score: {props.score}</p>
      <div>
        <button className={styles.accept} onClick={props.type} autoFocus>
          {buttonType.accept}
        </button>
        <button className={styles.decline} onClick={props.type}>
        {buttonType.decline}
        </button>
      </div>
    </div>
  );
}
