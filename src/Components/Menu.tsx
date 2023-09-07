import { MouseEventHandler } from "react";
import MenuButton from "./MenuButton";
import styles from "./Menu.module.scss";
import { GameControllerOutline } from "react-ionicons";
import { BookOutline } from "react-ionicons";

interface Props {
clickButton:MouseEventHandler;
}

export default function Menu(props:Props) {
  return (
    <div className={styles.menu}>
      <MenuButton text="PLAY" clickButton={props.clickButton}>
        <GameControllerOutline cssClasses={styles.icon} />
      </MenuButton>
      <MenuButton text="RULES" clickButton={props.clickButton}>
        <BookOutline cssClasses={styles.icon} />
      </MenuButton>
    </div>
  );
}
