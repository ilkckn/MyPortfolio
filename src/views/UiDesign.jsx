import { motion } from "framer-motion";
import {
  FaPencilRuler,
  FaPalette,
  FaRegLightbulb,
  FaRegSmile,
  FaRegObjectGroup,
  FaRegEye,
} from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-scroll";

function UiDesign({ handleWebModalClose }) {
  return (
    <div
      className="w-full max-w-[1600px] mx-auto min-h-[100vh] flex flex-col items-center justify-center gap-5 bg-transparent relative"
      id="ui-design"
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
          Functionality Meets Aesthetics
        </motion.p>
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-[4rem] md:text-[3.5rem] font-bold font-ovo tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          UI & UX Design Excellence
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
        I craft intuitive and visually engaging user interfaces that deliver seamless digital experiences. My UI/UX design philosophy centers on usability, accessibility, and delight—ensuring every interaction feels natural and every journey is memorable.
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
            <FaRegObjectGroup className="text-3xl text-white mb-3" />
            <span className="text-xl text-white font-medium mb-1">
              Consistent Layouts
            </span>
            <span className="text-base text-slate-300 text-center text-[1rem]">
              I design with grids and spacing in mind, ensuring every screen is harmonious and easy to navigate.
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: false }}
            className="bg-slate-800 rounded-2xl px-4 flex flex-col justify-center items-center w-full sm:w-[350px] sm:h-[14rem] shadow-lg border border-slate-700"
          >
            <FaRegEye className="text-3xl text-white mb-3" />
            <span className="text-xl text-white font-medium mb-1">
              Visual Hierarchy
            </span>
            <span className="text-base text-slate-300 text-center text-[1rem]">
              I use color, size, and contrast to guide users’ attention and make important actions stand out.
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
              User Delight
            </span>
            <span className="text-base text-slate-300 text-center text-[1rem]">
              Micro-interactions and subtle animations make every click and scroll feel rewarding and smooth.
            </span>
          </motion.div>
        </div>
        {/* UI Tasarımı Süreci */}
        <div className="w-full mt-10 flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-ovo"
          >
            My UI/UX Design Process
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
                1. Empathize & Research:
              </span>{" "}
              I study your users, their needs, and pain points to inform every design decision.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                2. Wireframing & Prototyping:
              </span>{" "}
              I create low- and high-fidelity wireframes to visualize flows and test ideas quickly.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                3. Visual Design:
              </span>{" "}
              I apply branding, color, and typography to bring wireframes to life with pixel-perfect detail.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                4. Usability Testing:
              </span>{" "}
              I gather feedback from real users and iterate to ensure the interface is intuitive and effective.
            </li>
            <li className="text-slate-700">
              <span className="font-semibold text-slate-900">
                5. Handoff & Support:
              </span>{" "}
              I deliver organized design files and support developers for a smooth implementation.
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
          Let's Design Your Interface <TiArrowRight className="text-2xl" />
        </Link>
        <span className="mt-2 text-slate-800 text-base">
          Ready to elevate your product’s user experience?
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

export default UiDesign;