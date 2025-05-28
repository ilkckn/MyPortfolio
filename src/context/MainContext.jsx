import React, { createContext, useState, useEffect } from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { RiGraduationCapLine } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiJavascript, SiExpress } from "react-icons/si";

export const MainContext = createContext();

function MainContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const iconClass = "h-6 w-6 grayscale";

  const cardsData = [
    {
      icon: <HiMiniCodeBracket />,
      title: "Language",
      content: (
        <div className="flex flex-wrap gap-3 items-center">
          <span className="flex items-center gap-2">
            <FaHtml5 className={iconClass} /> HTML
          </span>
          <span className="flex items-center gap-2">
            <FaCss3Alt className={iconClass} /> CSS
          </span>
          <span className="flex items-center gap-2">
            <SiTailwindcss className={iconClass} /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <SiJavascript className={iconClass} /> JavaScript
          </span>
          <span className="flex items-center gap-2">
            <FaReact className={iconClass} /> React
          </span>
          <span className="flex items-center gap-2">
            <SiMongodb className={iconClass} /> MongoDB
          </span>
          <span className="flex items-center gap-2">
            <FaGithub className={iconClass} /> GitHub
          </span>
          <span className="flex items-center gap-2">
            <FaGitAlt className={iconClass} /> Git
          </span>
          <span className="flex items-center gap-2">
            <SiFirebase className={iconClass} /> Firebase
          </span>
          <span className="flex items-center gap-2">
            <FaNodeJs className={iconClass} /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <SiExpress className={iconClass} /> Express.js
          </span>
        </div>
      ),
    },
    {
      icon: <RiGraduationCapLine />,
      title: "Education",
      content: (
        <ol className="flex flex-col gap-2 text-[1.1rem]">
          <li>- University Computer Engineering graduation.</li>
          <li>- Full-Stack Web Development graduation.</li>
        </ol>
      ),
    },
    {
      icon: <GoBriefcase />,
      title: "Projects",
      content: (
        <p className="text-[1.1rem]">
          Built more than 5 projects, including responsiveness, accessibility,
          and performance optimization.
        </p>
      ),
    },
  ];

  return (
    <div>
      <MainContext.Provider value={{ cardsData, isDarkMode, setIsDarkMode }}>
        {children}
      </MainContext.Provider>
    </div>
  );
}

export default MainContextProvider;