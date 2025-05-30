import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import NavMenuButton from "../components/NavMenuButton";

export default function MainLayout() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <NavMenuButton to="/" text="Home" />
          <NavMenuButton to="/biografie" text="Biografie" />
          <NavMenuButton to="/tentoonstellingen" text="Tentoonstellingen" />
          <NavMenuButton to="/portfolio" text="Portfolio" />
          <NavMenuButton to="/contact" text="Contact" />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        &copy; 1970 - {year} Marc Quateau. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}

