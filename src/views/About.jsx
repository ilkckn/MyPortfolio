import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState, useContext } from "react";
import { MainContext } from "../context/MainContext";
import personal from "../assets/images/personal/personal-1.png";
import InfiniteSlider from "../components/InfiniteSlider";

function About() {
  const { cardsData } = useContext(MainContext);
  const [selected, setSelected] = useState(0);

  return (
    <div
      id="about"
      className="about w-full min-h-[100vh] flex items-center justify-center relative overflow-hidden"
    >
      <main className="w-full h-[100vh] flex flex-col items-center justify-center gap-10">
        <section className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem]">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-[2.5rem] capitalize"
          >
            Introduction
          </motion.p>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-[5.5rem] text-slate-800 font-medium font-ovo tracking-wide"
          >
            About me
          </motion.h1>
        </section>
        <section className="content flex justify-between items-center gap-15 p-3 px-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            className="left flex-2/7 bg-slate-50 rounded-4xl overflow-hidden shadow-lg shadow-slate-700"
          >
            <figure
              className="w-full rounded-4xl overflow-hidden"
            >
              <img
                src={personal}
                alt=""
                className="w-full h-[35rem] object-cover"
              />
            </figure>
          </motion.div>
          <div className="right w-full h-[35rem] flex-5/7 flex flex-col justify-between">
            <motion.article
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false }}
              className="text-[1.4rem] text-slate-800 font-normal font-ovo"
            >
              <p>
                I'm a Full Stack Developer with a strong foundation built
                through two years of intensive training and hands-on experience
                across real-world projects. I specialize in developing scalable,
                maintainable, and user-centric web applications—covering
                everything from responsive front-end interfaces to robust
                back-end systems. My background combines formal education with
                practical work experience, enabling me to approach challenges
                with both technical proficiency and real-world perspective. I
                thrive on transforming ideas into impactful digital solutions
                using modern technologies across the stack.
              </p>
            </motion.article>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: false }}
              className="cards-container w-[40rem] flex flex-col gap-8 p-4  bg-transparent"
            >
              <div className="cards flex items-center gap-0.5">
                {cardsData.map((card, idx) => (
                  <button
                    key={card.title}
                    className={`relative flex justify-center items-center gap-2 px-5 font-medium text-[1.1rem] transition-all duration-200 cursor-pointer
                    ${
                      selected === idx
                        ? "text-white bg-slate-700 shadow-lg rounded-lg"
                        : "text-slate-700 bg-white hover:bg-white hover:text-blue-600"
                    }
                  `}
                    style={{ minWidth: 160, height: 50 }}
                    onClick={() => setSelected(idx)}
                  >
                    <span className="text-2xl">{card.icon}</span>
                    {card.title}
                    {selected === idx && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-4 right-4 -bottom-3 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        initial={{ opacity: 0, scaleX: 1 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 1 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="w-full min-h-[3rem] flex items-center justify-center font-normal">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cardsData[selected].title}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full"
                  >
                    {cardsData[selected].content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: false }}
              className="languages-programs"
            >
              <InfiniteSlider />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
