import styles from "./Warning.module.scss";

interface Props {
    warning : () => void
}


export default function Warning(props : Props) {
  return (
    <div className={styles.warning} onClick={props.warning} >
      <h4>WARNING</h4>
      <p>
        This application was made mainly for PC usage. For best experiance make
        sure you use physical keyboard.
      </p>
    </div>
  );
}
