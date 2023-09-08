import styles from "./Timer.module.scss";

interface Props {
  time: number;
}

export default function Timer(props: Props) {
  return (
    <div className={styles.timer}>
      <p>{props.time}</p>
    </div>
  );
}
