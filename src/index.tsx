import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { appState } from "@/state/app-state.ts";
import App from "./components/app/app.tsx";

const root = document.querySelector("#root");

if (root === null) {
  throw new Error("No #root element");
}

appState.getState().initialize();

ReactDOM.createRoot(root).render(
  <Router>
    <App />
  </Router>,
);
