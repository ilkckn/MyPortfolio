import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useContext } from "react";
import { BurgerMenuContext } from "../context/BurgerMenuContext";
import { MainContext } from "../context/MainContext";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdMenu, IoIosClose } from "react-icons/io";

function Navbar() {
  const { isBurgerMenuOpen, toggleBurgerMenu } = useContext(BurgerMenuContext);
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
            className={`flex items-center gap-4 text-[1.2rem] font-light font-outfit tracking-[1px] font-Ovo max-[1025px]:hidden ${
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
          <div className="linkedin-github flex items-center gap-1.5 max-[1025px]:hidden">
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
          <button className="contact flex items-center gap-2 text-md font-medium font-outfit border border-slate-700 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-700 hover:text-white transition duration-300 cursor-pointer max-[1025px]:hidden">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Hire me
            </ScrollLink>
            <GoArrowUpRight />
          </button>

          <div className="burger-menu text-[1.8rem] min-[1025px]:hidden">
            {isBurgerMenuOpen ? (
              <IoIosClose
                className="cursor-pointer text-[2.5rem]"
                onClick={toggleBurgerMenu}
              />
            ) : (
              <IoMdMenu className="cursor-pointer" onClick={toggleBurgerMenu} />
            )}
          </div>
        </div>
      </nav>

      {isBurgerMenuOpen && (
        <div className="min-[1025px]:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 border-t border-slate-400">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg text-slate-800 font-outfit">
            {navLinks.map(({ to, label, offset }, index) => (
              <motion.li
                key={to}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={offset}
                  onClick={toggleBurgerMenu}
                  onSetActive={(id) => setActive(id)}
                  className="relative cursor-pointer hover:text-blue-600 transition"
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    transition-all duration-500
                    ${active === to ? "opacity-100" : "opacity-0"}
                  `}
                  />
                </ScrollLink>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 pb-6">
            <div className="flex gap-4 text-xl">
              <a
                href="https://github.com/ilkckn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-blue-600 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/musacekcen-webdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-600 transition" />
              </a>
            </div>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleBurgerMenu}
              className="inline-flex items-center gap-2 border border-slate-700 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-700 hover:text-white transition duration-300 cursor-pointer"
            >
              Hire me <GoArrowUpRight />
            </ScrollLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
