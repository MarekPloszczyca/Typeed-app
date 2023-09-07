import styles from "./Rules.module.scss";

export default function Rules() {
  return (
    <div className={styles.rules}>
      <h4>RULES</h4>
      <ul>
        <li>You have 60 seconds</li>
        <li>Words have 4-5 letters and are randomly generated</li>
        <li>Your goal is to write as many correct words as you can</li>
      </ul>
    </div>
  );
}
