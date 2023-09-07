import { Fragment } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <Fragment>
      <h1 className={styles.header}>Typeed</h1>
      <h5 className={styles.subtitle}>Test your speed</h5>
    </Fragment>
  );
}
