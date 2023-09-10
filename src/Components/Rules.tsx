import BackButton from "./BackButton";
import styles from "./Rules.module.scss";

interface Props{
  rules:() => void;
}

const icon = '\u{02713}'

export default function Rules(props:Props) {
  return (
    <div className={styles.rules} >
      <h4>RULES</h4>
      <ul>
        <li>You have 60 seconds</li>
        <li>Words have 4-5 letters and are randomly generated</li>
        <li>Your goal is to write as many correct words as you can</li>
      </ul>
      <BackButton content={icon} rules={props.rules}/>
    </div>
  );
}
