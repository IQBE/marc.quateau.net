import { Link } from "react-router-dom";
import styles from "./NavMenuButton.module.scss";

type NavMenuButtonProps = {
  to: string;
  text: string;
  isActive?: boolean;
};

const NavMenuButton = ({ to, text, isActive = false }: NavMenuButtonProps) => {
  return (
    <Link
      to={to}
      className={styles.navMenuButton + (isActive ? ` ${styles.isActive}` : "")}
    >
      {text}
    </Link>
  );
};

export default NavMenuButton;

