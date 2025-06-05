import React, { createContext, useState, useEffect } from "react";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { RiGraduationCapLine } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

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
        <div
          className="flex flex-wrap gap-3 items-center 
            max-[1025px]:text-[1.2rem] 
            max-[821px]:justify-center 
            max-[769px]:text-[.9rem] max-[769px]:justify-center
            max-[431px]:text-[.8rem] max-[431px]:justify-center max-[431px]:w-full
            max-[415px]:text-[.8rem] max-[415px]:justify-center max-[415px]:w-full
            max-[391px]:text-[.8rem] max-[391px]:justify-center max-[391px]:w-full max-[391px]:gap-1
            max-[376px]:text-[.7rem] max-[376px]:justify-center max-[376px]:w-full max-[376px]:gap-1"
        >
          <span className="flex items-center gap- max-[821px]:text-[1rem] max-[391px]:text-[.8rem] max-[415px]:text-[.7rem] max-[376px]:text-[.7rem]">
            <FaHtml5 className={iconClass} /> HTML
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <FaCss3Alt className={iconClass} /> CSS
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <SiTailwindcss className={iconClass} /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <SiJavascript className={iconClass} /> JavaScript
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <FaReact className={iconClass} /> React
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <SiMongodb className={iconClass} /> MongoDB
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <FaGithub className={iconClass} /> GitHub
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <FaGitAlt className={iconClass} /> Git
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <SiFirebase className={iconClass} /> Firebase
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <FaNodeJs className={iconClass} /> Node.js
          </span>
          <span className="flex items-center gap-2 max-[821px]:text-[1rem] max-[431px]:[.8rem] max-[415px]:text-[.75rem] max-[391px]:text-[.8rem] max-[376px]:text-[.7rem]">
            <SiExpress className={iconClass} /> Express.js
          </span>
        </div>
      ),
    },
    {
      icon: <RiGraduationCapLine />,
      title: "Education",
      content: (
        <ol className="flex flex-col gap-2 text-[1.1rem] max-[821px]:text-center max-[769px]:items-center max-[431px]:text-[.9rem]">
          <li>- University Computer Engineering graduation.</li>
          <li>- Full-Stack Web Development graduation.</li>
        </ol>
      ),
    },
    {
      icon: <GoBriefcase />,
      title: "Projects",
      content: (
        <p className="text-[1.1rem] max-[821px]:text-center max-[769px]:text-center max-[431px]:text-[.9rem]">
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
