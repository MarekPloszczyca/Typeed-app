import { MouseEventHandler } from "react";
import styles from "./MenuButton.module.scss";

interface Props {
  text: string;
  children: JSX.Element;
  clickButton: MouseEventHandler;
}

export default function MenuButton(props: Props) {
  return (
    <button className={styles.menuButton} onClick={props.clickButton}>
      {props.text}
      {props.children}
    </button>
  );
}
