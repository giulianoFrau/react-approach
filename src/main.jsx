import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primeicons/primeicons.css";
import store from "./stores/store";
import { Provider } from "react-redux";
import HomeView from "./view/HomeView.jsx";
import About from "./view/About.jsx";
import FilteredCityView from "./view/FilteredCityView.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/filtered-cities",
    element: <FilteredCityView />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);