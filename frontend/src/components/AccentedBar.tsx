import styles from "./AccentedBar.module.scss";

type AccentedBarProps = {
  children?: React.ReactNode;
};

const AccentedBar = ({ children }: AccentedBarProps) => {
  return <div className={styles.accentedBar}>{children}</div>;
};

export default AccentedBar;

