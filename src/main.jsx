import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primeicons/primeicons.css";
import App from "./App.jsx";
import About from "./components/pages/About.jsx";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
