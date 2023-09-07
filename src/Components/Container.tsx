import styles from "./Container.module.scss";

type Props = {
  children: (JSX.Element | boolean)[];
};

export default function Container(props: Props) {
  return <div className={styles.container}>{props.children}</div>;
}
