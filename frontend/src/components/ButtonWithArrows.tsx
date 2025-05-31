import styles from "./ButtonWithArrows.module.scss";
import { useNavigate } from "react-router-dom";

type ButtonWithArrowsProps = {
  text: string;
  to: string;
  type: "primary" | "secondary" | "accent";
  className?: string;
};

const ButtonWithArrows = ({
  text,
  to,
  type = "primary",
  className = "",
}: ButtonWithArrowsProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      className={`${styles.ButtonWithArrows} ${styles[type]} ${className}`}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonWithArrows;

