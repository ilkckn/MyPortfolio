import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "../context/MainContext";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(MainContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "my-services", label: "My Services" },
    { to: "works", label: "My Works" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact me" },
  ];

  function debounce(func, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.to));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].to);
          break;
        }
      }
    };

    const debouncedScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  return (
    <div
      className={`container max-w-[1600px] mx-auto px-10 py-4 fixed top-0 z-50
    ${
      isScrolled ? "backdrop-blur bg-slate-100/60" : "bg-white"
    } shadow-md transition`}
    >
      <nav className="flex items-center justify-between">
        <div className="logo">
          <h1 className="text-[2.5rem] text-slate-900 font-medium relative tracking-[2px] font-Ovo">
            Musa{" "}
            <span className="dot w-2.5 h-2.5 block rounded-full bg-gradient-to-r from-blue-600 to-blue-400 absolute bottom-[14px] -right-4"></span>
          </h1>
        </div>
        <section className="links">
          <ul
            className={`flex items-center gap-4 text-[1.2rem] font-light font-outfit tracking-[1px] font-Ovo ${
              !isScrolled ? "text-slate-900" : "text-slate-900"
            }`}
          >
            {navLinks.map(({ to, label, offset }) => (
              <li key={to} className="relative cursor-pointer group px-1">
                <ScrollLink
                  to={to}
                  smooth="ease"
                  duration={500}
                  offset={offset}
                  className="inline-block"
                  // onClick={() => setActive(to)}
                  onSetActive={(id) => setActive(id)}
                  // spy={true}
                >
                  {label}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                      transition-all duration-500
                      ${active === to ? "w-full opacity-100" : "w-0 opacity-0"}
                      group-hover:w-full group-hover:opacity-100
                    `}
                  />
                </ScrollLink>
              </li>
            ))}
          </ul>
        </section>
        <div className="buttons flex items-center gap-3">
          <div className="linkedin-github flex items-center gap-1.5">
            <button className="text-[1.4rem] text-slate-800 cursor-pointer">
              <a
                href="https://github.com/ilkckn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </button>
            <button className="text-[1.4rem] text-slate-800 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/musacekcen-webdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </button>
          </div>
          <button className="contact flex items-center gap-2 text-md font-medium font-outfit border border-slate-700 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-700 hover:text-white transition duration-300 cursor-pointer">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Hire me
            </ScrollLink>
            <GoArrowUpRight />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
