import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductsList from "./components/ProductsList.jsx";
import About from "./components/About.jsx";
import Policy from "./components/Policy.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="/about" element={<About />} />
        <Route path="/productsList" element={<ProductsList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
