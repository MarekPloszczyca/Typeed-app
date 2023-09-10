import { MouseEventHandler } from "react";
import styles from "./Confirmation.module.scss";

interface Props {
  type: MouseEventHandler;
}

const buttonType = {
  accept: "\u{02713}",
  decline: "\u{2715}",
};

export default function Confirmation(props: Props) {
  return (
    <div className={styles.confirmation}>
      <p>Are you ready?</p>
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
