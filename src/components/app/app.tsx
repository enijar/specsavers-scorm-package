import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as Style from "@/components/app/app.style.ts";
import { appState } from "@/state/app-state.ts";
import HomePage from "@/pages/home-page/home-page.tsx";

export default function App() {
  const loadedRef = React.useRef(false);
  const bookmark = appState((state) => state.bookmark);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (loadedRef.current) {
      return appState.getState().updateBookmark({ pathname });
    }
    loadedRef.current = true;
    navigate(bookmark.pathname);
  }, [bookmark.pathname, pathname]);

  return (
    <>
      <Style.AppReset />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
