import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import personal from "../assets/images/personal/personal-1.png";
// import iconHand from "../assets/images/icons/hand.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-scroll";
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeamsWithCollision";

function Hero() {
  return (
    <div
      className="hero w-full min-h-[100vh] flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      <BackgroundBeamsWithCollision className="absolute top-3 left-0 -z-10 w-full h-[98vh]" />
      <section
        className="w-full h-[100vh] flex flex-col justify-center items-center gap-5 px-4
          max-[1025px]:gap-3
          max-[376px]:pt-15"
      >
        <div className="section-1 flex flex-col justify-center items-center gap-10 rounded-full mb-3">
          <motion.figure
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            className="w-[22rem] h-[22rem] flex rounded-full overflow-hidden shadow-lg bg-slate-600 mb-5
             max-[1025px]:w-[20rem] max-[1025px]:h-[20rem] max-[1025px]:mb-3
             max-[821px]:w-[18rem] max-[821px]:h-[18rem] max-[821px]:mb-2
             max-[769px]:w-[16rem] max-[769px]:h-[16rem] max-[769px]:mb-1
             max-[431px]:w-[13rem] max-[431px]:h-[13rem] max-[431px]:mb-0
             max-[391px]:w-[10rem] max-[391px]:h-[10rem] max-[391px]:mb-0
             max-[376px]:w-[8rem] max-[376px]:h-[8rem] max-[376px]:mb-0"
          >
            <img src={personal} alt="" className="object-cover" />
          </motion.figure>
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-5xl font-ovo w-full flex items-center gap-4
            max-[1025px]:text-[2.7rem] max-[1025px]:text-center
            max-[821px]:text-[2.3rem] max-[821px]:text-center
            max-[769px]:text-[2rem] max-[769px]:text-center
            max-[431px]:text-[1.6rem] max-[431px]:text-center
            max-[391px]:text-[1.4rem] max-[391px]:text-center
            max-[376px]:text-[1.2rem] max-[376px]:text-center"
          >
            Hi! I'm Musa Cekcen{" "}
            {/* <span>
              <figure className="w-10">
                <img src={iconHand} alt="" />
              </figure>
            </span> */}
          </motion.h1>
        </div>
        <div
          className="section-2 flex flex-col justify-center items-center gap-5 mb-4
            max-[1025px]:gap-2
            max-[769px]:gap-0"
        >
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            className="text-6xl font-ovo font-bold tracking-wider min-h-[4.2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
            max-[1025px]:text-[3rem] max-[1025px]:text-center
            max-[821px]:text-[2.5rem] max-[821px]:text-center
            max-[769px]:text-[2.3rem] max-[769px]:text-center
            max-[431px]:text-[1.8rem] max-[431px]:text-center
            max-[391px]:text-[1.6rem] max-[391px]:text-center
            max-[376px]:text-[1.4rem] max-[376px]:text-center"
          >
            <Typewriter
              words={[
                "Full-Stack Developer",
                "UI Designer",
                "Graphic Designer",
                "Logo Designer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={1200}
            />
            <span className="text-slate-800 font-normal">based in Germany</span>
          </motion.h1>
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
            className="w-[70%] text-slate-600 text-[1.45rem] text-center font-ovo font-normal tracking-[1px]
              max-[821px]:text-[1.4rem] max-[821px]:w-[90%] max-[821px]:text-center max-[821px]:tracking-[0.5px]
              max-[769px]:text-[1.2rem] max-[769px]:w-[90%] max-[769px]:text-center max-[769px]:tracking-[0.5px]
              max-[431px]:text-[1rem] max-[431px]:w-[90%] max-[431px]:text-center max-[431px]:tracking-[0.5px]
              max-[391px]:text-[1rem] max-[391px]:w-[90%] max-[391px]:text-center max-[391px]:tracking-[0.5px]
              max-[376px]:text-[.9rem] max-[376px]:w-[90%] max-[376px]:text-center max-[376px]:tracking-[0.5px]"
          >
            Full-Stack Developer based in Germany with a background in Turkey
            and over two years of hands-on experience in web development. I
            build responsive, user-friendly interfaces using modern
            technologies.
          </motion.p>
        </div>
        <motion.div className="section-3">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: false }}
            className="buttons flex items-center gap-8
              max-[1025px]:gap-4"
          >
            <a
              href="/resume.pdf"
              download="Musa_Cekcen_Resume.pdf"
              className="flex items-center gap-2 text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                max-[1025px]:text-lg max-[1025px]:px-9 max-[1025px]:py-3.5
                max-[821px]:text-lg max-[821px]:px-6 max-[821px]:py-2.5
                max-[769px]:text-md max-[769px]:px-5 max-[769px]:py-2
                max-[431px]:text-md max-[431px]:px-4 max-[431px]:py-2 max-[431px]:text-[.8rem]
                max-[391px]:text-md max-[391px]:px-3 max-[391px]:py-2
                max-[376px]:text-md max-[376px]:px-3 max-[376px]:py-2 max-[376px]:gap-1"
            >
              My Resume
              <MdOutlineFileDownload className="text-xl" />
            </a>
            <Link
              to="contact"
              className="flex items-end gap-2 text-xl bg-transparent text-blue-500 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-500 hover:text-white transition-all duration-300 border border-blue-500 relative cursor-pointer
              max-[1025px]:text-lg max-[1025px]:px-9 max-[1025px]:py-3.5
              max-[821px]:text-lg max-[821px]:px-6 max-[821px]:py-2.5
              max-[769px]:text-md max-[769px]:px-5 max-[769px]:py-2
              max-[431px]:text-md max-[431px]:px-3 max-[431px]:py-2 max-[431px]:text-[.8rem]
              max-[391px]:text-md max-[391px]:px-3 max-[391px]:py-2 max-[391px]:text-[.8rem]
              max-[376px]:text-md max-[376px]:px-3 max-[376px]:py-2 max-[376px]:text-[.8rem] max-[376px]:gap-1"
            >
              Connect with me
              <TiArrowRight className="text-xl" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
