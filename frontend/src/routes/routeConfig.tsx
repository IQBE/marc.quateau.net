import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Biografie = lazy(() => import("../pages/Biografie"));
export const Tentoonstellingen = lazy(
  () => import("../pages/Tentoonstellingen")
);
export const Portfolio = lazy(() => import("../pages/Portfolio"));
export const Contact = lazy(() => import("../pages/Contact"));
export const NotFound = lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/biografie",
    element: <Biografie />,
    title: "Biografie",
  },
  {
    path: "/tentoonstellingen",
    element: <Tentoonstellingen />,
    title: "Tentoonstellingen",
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    title: "Portfolio",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
];

