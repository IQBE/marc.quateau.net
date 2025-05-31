import styles from "./HighlightedItem.module.scss";

type HighlightedItemProps = {
  children: React.ReactNode;
};

const HighlightedItem = ({ children }: HighlightedItemProps) => {
  return <div className={styles.highlightedItem}>{children}</div>;
};

export default HighlightedItem;

