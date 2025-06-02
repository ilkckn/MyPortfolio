import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Contact from "./views/Contact";
import Hero from "./views/Hero";
import MyWorks from "./views/MyWorks";
import Testimonials from "./views/Testimonials";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import MyServices from "./views/MyServices";
import { Toaster } from "react-hot-toast";
import GraphicDesign from "./views/GraphicDesign";

function App() {
  const { isDarkMode } = useContext(MainContext);

useEffect(() => {
  const savedScrollPosition = sessionStorage.getItem("scrollPosition");

  // Hafif bir gecikmeyle scroll'u uygula
  if (savedScrollPosition) {
    setTimeout(() => {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }, 50); // 50ms gecikme (20-100ms arası test edebilirsin)
  }

  const handleBeforeUnload = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };

  window.addEventListener("beforeunload", handleBeforeUnload);
  return () => window.removeEventListener("beforeunload", handleBeforeUnload);
}, []);



  return (
    <div className="app overflow-x-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: isDarkMode ? "#1D293D" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          },
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <MyServices />
      <MyWorks />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
