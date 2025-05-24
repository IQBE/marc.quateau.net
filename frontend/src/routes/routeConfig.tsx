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
    title: "Marc | Home",
  },
  {
    path: "/biografie",
    element: <Biografie />,
    title: "Marc | Biografie",
  },
  {
    path: "/tentoonstellingen",
    element: <Tentoonstellingen />,
    title: "Marc | Tentoonstellingen",
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    title: "Marc | Portfolio",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Marc | Contact",
  },
];

