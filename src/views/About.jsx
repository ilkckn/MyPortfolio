import { motion, AnimatePresence } from "framer-motion";
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
      className="about w-full min-h-[100vh] flex items-center justify-center relative overflow-hidden
      max-[769px]:pt-10
      max-[431px]:pt-7
      max-[391px]:pt-5
      max-[376px]:pt-7"
    >
      <main
        className="w-full h-[100vh] flex flex-col items-center justify-center gap-10
          max-[1025px]:gap-5 px-12
          max-[769px]:gap-5 max-[769px]:px-15
          max-[431px]:gap-4 max-[431px]:px-0
          max-[415px]:gap-3 max-[415px]:px-0
          max-[391px]:gap-3 max-[391px]:px-0
          max-[376px]:gap-2 max-[376px]:px-0"
      >
        <section
          className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem]
          max-[1025px]:leading-[4.5rem]
          max-[821px]:leading-[4rem]
          max-[769px]:leading-[3.5rem] text-center
          max-[431px]:leading-[3rem] max-[431px]:mb-0
          max-[415px]:leading-[2.5rem] max-[415px]:mb-0
          max-[391px]:leading-[2.5rem] max-[391px]:mb-0
          max-[376px]:leading-[2rem] max-[376px]:mb-0"
        >
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-[2.5rem] capitalize
            max-[1025px]:text-[2.4rem] max-[1025px]:text-center
            max-[821px]:text-[2.2rem] max-[821px]:text-center
            max-[769px]:text-[2rem] max-[769px]:text-center
            max-[431px]:text-[1.5rem] max-[431px]:text-center
            max-[415px]:text-[1.4rem] max-[415px]:text-center
            max-[391px]:text-[1.3rem] max-[391px]:text-center
            max-[376px]:text-[1.2rem] max-[376px]:text-center"
          >
            Introduction
          </motion.p>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-[5.5rem] text-slate-800 font-medium font-ovo tracking-wide
            max-[1025px]:text-[4.5rem] max-[1025px]:text-center
            max-[821px]:text-[4rem] max-[821px]:text-center
            max-[769px]:text-[3.5rem] max-[769px]:text-center
            max-[431px]:text-[2.5rem] max-[431px]:text-center
            max-[415px]:text-[2.3rem] max-[415px]:text-center
            max-[391px]:text-[2.2rem] max-[391px]:text-center
            max-[376px]:text-[2rem] max-[376px]:text-center"
          >
            About me
          </motion.h1>
        </section>
        <section
          className="content flex justify-between items-center gap-15 p-3 px-6
            max-[1025px]:flex-col max-[1025px]:gap-10 max-[1025px]:p-4 max-[1025px]:px-2
            max-[821px]:gap-8 max-[821px]:p-2 max-[821px]:px-1
            max-[769px]:gap-6 max-[769px]:p-1 max-[769px]:px-0
            max-[431px]:gap-4 max-[431px]:p-0 max-[431px]:px-0
            max-[415px]:gap-5 max-[415px]:p-0 max-[415px]:px-0
            max-[391px]:gap-3 max-[391px]:p-0 max-[391px]:px-0
            max-[376px]:gap-2 max-[376px]:p-0 max-[376px]:px-0"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            className="left flex-2/7 bg-slate-50 rounded-4xl overflow-hidden shadow-lg shadow-slate-700
            max-[1025px]:rounded-full max-[1025px]:h-[15rem] max-[1025px]:w-[15rem]
            max-[821px]:rounded-full max-[821px]:h-[12rem] max-[821px]:w-[12rem]
            max-[769px]:rounded-full max-[769px]:h-[12rem] max-[769px]:w-[12rem]
            max-[431px]:rounded-full max-[431px]:h-[10rem] max-[431px]:w-[10rem]
            max-[415px]:rounded-full max-[415px]:h-[8rem] max-[415px]:w-[8rem]
            max-[391px]:rounded-full max-[391px]:h-[8rem] max-[391px]:w-[8rem]
            max-[376px]:rounded-full max-[376px]:h-[6rem] max-[376px]:w-[6rem]"
          >
            <figure
              className="w-full rounded-4xl overflow-hidden
              max-[1025px]:rounded-full max-[1025px]:w-[15rem] max-[1025px]:h-[15rem]
              max-[821px]:rounded-full max-[821px]:w-[12rem] max-[821px]:h-[12rem]
              max-[769px]:rounded-full max-[769px]:w-[12rem] max-[769px]:h-[12rem]
              max-[431px]:rounded-full max-[431px]:w-[10rem] max-[431px]:h-[10rem]
              max-[415px]:rounded-full max-[415px]:w-[8rem] max-[415px]:h-[8rem]
              max-[391px]:rounded-full max-[391px]:w-[8rem] max-[391px]:h-[8rem]
              max-[376px]:rounded-full max-[376px]:w-[6rem] max-[376px]:h-[6rem]"
            >
              <img
                src={personal}
                alt=""
                className="w-full h-[35rem] object-cover
                max-[1025px]:w-[15rem] max-[1025px]:h-[15rem] max-[1025px]:object-cover
                max-[821px]:w-[12rem] max-[821px]:h-[12rem] max-[821px]:object-cover
                max-[769px]:w-[12rem] max-[769px]:h-[12rem] max-[769px]:object-cover
                max-[431px]:w-[10rem] max-[431px]:h-[10rem] max-[431px]:object-cover
                max-[415px]:w-[8rem] max-[415px]:h-[8rem] max-[415px]:object-cover
                max-[391px]:w-[8rem] max-[391px]:h-[8rem] max-[391px]:object-cover
                max-[376px]:w-[6rem] max-[376px]:h-[6rem] max-[376px]:object-cover"
              />
            </figure>
          </motion.div>
          <div
            className="right w-full h-[35rem] flex-5/7 flex flex-col justify-between
            max-[1025px]:items-center
            max-[769px]:gap-4
            max-[431px]:gap-3 max-[431px]:items-center
            max-[415px]:gap-2 max-[415px]:items-center
            max-[391px]:gap-2 max-[391px]:items-center
            max-[376px]:gap-4 max-[376px]:items-center"
          >
            <motion.article
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false }}
              className="text-[1.4rem] text-slate-800 font-normal font-ovo
              max-[1025px]:text-[1.3rem] max-[1025px]:text-center max-[1025px]:w-full
              max-[821px]:text-[1.2rem] max-[821px]:text-center max-[821px]:w-full
              max-[769px]:text-[1.1rem] max-[769px]:text-center max-[769px]:w-full max-[769px]:leading-6
              max-[431px]:text-[1rem] max-[431px]:text-center max-[431px]:w-[90%] max-[431px]:leading-5
              max-[415px]:text-[0.95rem] max-[415px]:text-center max-[415px]:w-[90%] max-[415px]:leading-4
              max-[391px]:text-[0.9rem] max-[391px]:text-center max-[391px]:w-[90%] max-[391px]:leading-4
              max-[376px]:text-[0.85rem] max-[376px]:text-center max-[376px]:w-[90%] max-[376px]:leading-4 max-[376px]:overflow-y-auto max-[376px]:h-[8.5rem]"
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
              className="cards-container w-[50rem] flex flex-col gap-8 p-4  bg-transparent
                max-[1025px]:items-center
                max-[821px]:w-[45rem] max-[821px]:p-2
                max-[769px]:w-[40rem] max-[769px]:p-0
                max-[431px]:w-[25rem] max-[431px]:p-0 max-[431px]:justify-center
                max-[415px]:w-[22rem] max-[415px]:p-0 max-[415px]:justify-center
                max-[391px]:w-[20rem] max-[391px]:p-0 max-[391px]:justify-center
                max-[376px]:w-[22rem] max-[376px]:p-0 max-[376px]:justify-center max-[376px]:gap-5"
            >
              <div
                className="cards flex items-center gap-0.5
                  max-[769px]:w-[100%] max-[769px]:justify-center"
              >
                {cardsData.map((card, idx) => (
                  <button
                    key={card.title}
                    className={`relative flex justify-center items-center gap-2 px-3 py-2 font-medium text-sm transition-all duration-200 cursor-pointer
                      max-[1025px]:text-[1.2rem] max-[1025px]:px-6 max-[1025px]:py-3
                      max-[821px]:text-[1.1rem] max-[821px]:px-4 max-[821px]:py-2
                      max-[769px]:text-[1rem] max-[769px]:px-5 max-[769px]:py-2
                      max-[431px]:text-[0.9rem] max-[431px]:px-3 max-[431px]:py-1
                      max-[415px]:text-[0.85rem] max-[415px]:px-2 max-[415px]:py-1
                      max-[391px]:text-[0.8rem] max-[391px]:px-2 max-[391px]:py-1
                      max-[376px]:text-[0.8rem] max-[376px]:px-2 max-[376px]:py-1
                    ${
                      selected === idx
                        ? "text-white bg-slate-700 shadow-lg rounded-md"
                        : "text-slate-700 bg-white hover:bg-white hover:text-blue-600 hover:shadow-md"
                    }`}
                    onClick={() => setSelected(idx)}
                  >
                    <span
                      className="text-lg 
                    max-[1025px]:text-[1.3rem] 
                    max-[821px]:text-[1.2rem] 
                    max-[769px]:text-[1rem]
                    max-[431px]:text-[.9rem]
                    max-[415px]:text-[.85rem]
                    max-[391px]:text-[.8rem]
                    max-[376px]:text-[.75rem]"
                    >
                      {card.icon}
                    </span>
                    {card.title}
                    {selected === idx && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-2 right-2 -bottom-2 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
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
              initial={{ y: 70, opacity: 0 }}
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
