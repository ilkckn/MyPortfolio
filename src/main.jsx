import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainContextProvider, { MainContext } from "./context/MainContext.jsx";
import TestimonialsContext from "./context/TestimonialsContext.jsx";
import TestimonialsContextProvider from "./context/TestimonialsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <TestimonialsContextProvider>
        <App />
      </TestimonialsContextProvider>
    </MainContextProvider>
  </StrictMode>
);
