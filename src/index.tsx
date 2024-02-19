import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SettingsContextProvider } from "./context/SettingsContext";
import { TrackerContextProvider } from "./context/TrackerContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <SettingsContextProvider>
    <TrackerContextProvider>
      <App />
    </TrackerContextProvider>
  </SettingsContextProvider>,
);
