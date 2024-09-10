import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";

import "primeicons/primeicons.css";
import store from "./stores/store";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
