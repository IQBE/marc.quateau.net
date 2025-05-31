import { Outlet, useLocation } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import NavMenuButton from "../components/NavMenuButton";
import { routes } from "../routes/routeConfig";

export default function MainLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1]; // first part of path
  const d = new Date();
  const year = d.getFullYear();

  const isActive = (title: string) => {
    return (
      currentPath === title.toLowerCase() ||
      (currentPath === "" && title === "Home")
    );
  };

  return (
    <div className={styles.container}>
      <header>
        <nav>
          {routes.map(({ path, title }) => (
            <NavMenuButton
              key={path}
              to={path}
              text={title}
              isActive={isActive(title)}
            />
          ))}
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

