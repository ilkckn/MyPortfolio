import { motion } from "framer-motion";
import {
  FaPencilRuler,
  FaPalette,
  FaRegLightbulb,
  FaRegSmile,
} from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-scroll";

function GraphicDesign({ handleWebModalClose }) {
  return (
    <div
      className="w-full max-w-[1600px] max-auto min-h-[100vh] flex flex-col items-center justify-center gap-5 bg-transparent relative"
      id="graphic-design"
    >
      {/* Başlık ve giriş */}
      <section className="font-ovo flex flex-col justify-center items-center gap-4 leading-[4rem] mb-2">
        <motion.p
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-[2.2rem] text-slate-900"
        >
          Creativity Meets Precision
        </motion.p>
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-[4rem] md:text-[3.5rem] font-bold font-ovo tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Graphic Design & Logo Artistry
        </motion.h1>
      </section>
      {/* Açıklama */}
      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
        className="w-full max-w-3xl text-[1.25rem] text-slate-900 text-center font-ovo font-normal"
      >
        I specialize in creating visually striking and memorable designs that
        help brands stand out. My graphic design journey is rooted in a passion
        for visual storytelling, color harmony, and clean aesthetics. From
        digital banners to print-ready materials, I deliver creative solutions
        tailored to your needs.
      </motion.p>
      {/* Öne çıkan özellikler */}
      <div className="div w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-8 mt-4">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: false }}
            className="bg-slate-800 rounded-2xl px-4 flex flex-col justify-center items-center w-full sm:w-[350px] sm:h-[14rem] shadow-lg border border-slate-700"
          >
            <FaPalette className="text-3xl text-white mb-3" />
            <span className="text-xl text-white font-medium mb-1">
              Color Mastery
            </span>
            <span className="text-base text-slate-300 text-center text-[1rem]">
              I use color psychology and harmony to create designs that evoke
              emotion and strengthen brand identity.
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: false }}
            className="bg-slate-800 rounded-2xl px-4 flex flex-col justify-center items-center w-full sm:w-[350px] sm:h-[14rem] shadow-lg border border-slate-700"
          >
            <FaRegLightbulb className="text-3xl text-white mb-3" />
            <span className="text-xl text-white font-medium mb-1">
              Creative Concepts
            </span>
            <span className="text-base text-slate-300 text-center text-[1rem]">
              Every project starts with a unique idea. I turn concepts into
              visuals that communicate your message clearly.
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            viewport={{ once: false }}
            className="bg-slate-800 rounded-2xl px-4 flex flex-col justify-center items-center w-full sm:w-[350px] sm:h-[14rem] shadow-lg border border-slate-700"
          >
            <FaRegSmile className="text-3xl text-white mb-3" />
            <span className="text-xl text-white font-medium mb-1">
              Client Satisfaction
            </span>
            <span className="text-base text-slate-300 text-center text-[1rem]">
              I value feedback and collaboration, ensuring every design exceeds
              expectations and delivers real impact.
            </span>
          </motion.div>
        </div>
        {/* Logo Tasarımı Süreci */}
        <div className="w-full mt-10 flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-ovo"
          >
            My Logo Design Approach
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            viewport={{ once: false }}
            className="w-full flex flex-col items-center gap-2 text-slate-200 text-lg"
          >
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                1. Research & Discovery:
              </span>{" "}
              I analyze your brand, audience, and competitors to lay a strong
              foundation.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                2. Sketching & Ideation:
              </span>{" "}
              I brainstorm and sketch multiple concepts, exploring different
              directions.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                3. Digital Drafting:
              </span>{" "}
              The best ideas are refined digitally, focusing on scalability and
              clarity.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                4. Feedback & Revision:
              </span>{" "}
              I present options, gather your feedback, and make revisions for
              the perfect result.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">5. Delivery:</span>{" "}
              You receive all logo files in various formats, ready for print and
              digital use.
            </li>
          </motion.ul>
        </div>
      </div>
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.7 }}
        viewport={{ once: false }}
        className="mt-10 flex flex-col items-center"
      >
        <Link
          to="contact"
          smooth={true}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition cursor-pointer"
          onClick={handleWebModalClose}
        >
          Let's Create Your Brand <TiArrowRight className="text-2xl" />
        </Link>
        <span className="mt-2 text-slate-800 text-base">
          Ready to make your brand unforgettable?
        </span>
      </motion.div>
      {/* Modal close */}
      <button
        onClick={handleWebModalClose}
        className="inline-flex items-center gap-2 absolute top-10 left-20 text-xl text-slate-900 transition cursor-pointer"
        aria-label="Close"
      >
        <IoIosArrowRoundBack />
        Go Back
      </button>
    </div>
  );
}

export default GraphicDesign;
