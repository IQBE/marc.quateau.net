import styles from "./AccentedBar.module.scss";

type AccentedBarProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
};

const AccentedBar = ({ children, columns = 1 }: AccentedBarProps) => {
  return (
    <div className={`${styles.accentedBar} ${styles[`columns-${columns}`]}`}>
      {children}
    </div>
  );
};

export default AccentedBar;

