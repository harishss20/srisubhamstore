import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductsList from "./components/ProductsList.jsx";
import About from "./components/About.jsx";
import Policy from "./components/Policy.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/privacy",
      element: <Policy />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/productsList",
      element: <ProductsList />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/srisubhamstore/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
