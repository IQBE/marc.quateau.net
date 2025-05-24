import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import { routes, NotFound } from "./routeConfig";
import TitleWrapper from "./TitleWrapper";

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map(({ path, element, title }) => (
            <Route
              key={path}
              path={path}
              element={<TitleWrapper title={title}>{element}</TitleWrapper>}
            />
          ))}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

