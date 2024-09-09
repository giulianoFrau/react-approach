import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";

import "primeicons/primeicons.css";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
