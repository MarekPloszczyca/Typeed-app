import styles from "./BackButton.module.scss";

interface Props {
  content: string;
  rules: () => void;
}

export default function BackButton(props: Props) {
  return (
    <button className={styles.backButton} onClick={props.rules} >
      {props.content}
    </button>
  );
}
