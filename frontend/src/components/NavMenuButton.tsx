import { Link } from "react-router-dom";
import styles from "./NavMenuButton.module.scss";

const NavMenuButton = (args: { to: string; text: string }) => {
  return (
    <Link to={args.to} className={styles.navMenuButton}>
      {args.text}
    </Link>
  );
};

export default NavMenuButton;

