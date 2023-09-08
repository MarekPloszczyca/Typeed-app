import { Fragment } from "react";
import styles from "./WordsField.module.scss";

interface Props {
  current: string;
  points: number;
  color:string;
}

export default function WordsField(props: Props) {
  return (
    <Fragment>
      <div className={styles.points}>
        <p>{props.points}</p>
      </div>
      <div className={styles.currentWord}>
        <p className={props.color}>{props.current}</p>
      </div>
    </Fragment>
  );
}
