import styles from "./MenuButton.module.scss";

type Props = {
  text: string;
  children: JSX.Element;
};

export default function MenuButton(props: Props) {
  return (
    <button className={styles.menuButton}>
      {props.text}
      {props.children}
    </button>
  );
}
