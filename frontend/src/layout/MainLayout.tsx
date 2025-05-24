import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/biografie">Biografie</Link> |{" "}
          <Link to="/tentoonstellingen">Tentoonstellingen</Link> |{" "}
          <Link to="/portfolio">Portfolio</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 1970 - {year} Marc Quateau. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}

