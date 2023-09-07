import MenuButton from "./MenuButton";
import styles from "./Menu.module.scss";
import { GameControllerOutline } from "react-ionicons";
import { BookOutline } from "react-ionicons";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <MenuButton text="PLAY">
        <GameControllerOutline cssClasses={styles.icon}/>
      </MenuButton>
      <MenuButton text="RULES">
        <BookOutline cssClasses={styles.icon}/>
      </MenuButton>
    </div>
  );
}
