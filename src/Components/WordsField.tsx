import styles from "./WordsField.module.scss";

interface Props {
  current: string;
 
  color: string;
}

export default function WordsField(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.currentWord}>
          <p className={props.color}>{props.current}</p> 
      </div>
    </div>
  );
}
