import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRegLightbulb,
  FaRegSmile,
  FaRegObjectGroup,
  FaRegCheckCircle,
  FaRocket,
  FaCogs,
} from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-scroll";

function WebDesign({ handleWebModalClose }) {
  return (
    <div
      className="w-full max-w-[1700px] mx-auto min-h-[100vh] flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative"
      id="web-design"
    >
      {/* Başlık ve giriş */}
      <section className="font-ovo flex flex-col justify-center items-center gap-3 leading-[4rem] mb-2">
        <motion.p
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-[2.2rem] text-slate-800"
        >
          Modern, Responsive, Impactful
        </motion.p>
        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-[4rem] md:text-[3.5rem] font-bold font-ovo tracking-wide bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Web Design & Development
        </motion.h1>
      </section>
      {/* Açıklama */}
      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
        className="w-full max-w-4xl text-[1.25rem] text-slate-700 text-center font-ovo font-normal"
      >
        I create websites that are not only visually stunning but also fast,
        accessible, and user-friendly. My approach combines creative design with
        robust development, ensuring your site looks great and performs
        flawlessly on every device. From landing pages to complex web
        applications, I deliver digital experiences that drive results and leave
        a lasting impression.
      </motion.p>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Öne çıkan özellikler */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl px-6 py-7 flex flex-col justify-center items-center w-full sm:w-[340px] sm:h-[15rem] shadow-xl border border-slate-200"
          >
            <FaLaptopCode className="text-4xl text-blue-500 mb-3" />
            <span className="text-xl text-slate-900 font-semibold mb-1">
              Custom Development
            </span>
            <span className="text-base text-slate-600 text-center">
              Every website is built from scratch, tailored to your brand and
              goals—no generic templates.
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl px-6 py-7 flex flex-col justify-center items-center w-full sm:w-[340px] sm:h-[15rem] shadow-xl border border-slate-200"
          >
            <FaMobileAlt className="text-4xl text-pink-500 mb-3" />
            <span className="text-xl text-slate-900 font-semibold mb-1">
              Mobile-First & Responsive
            </span>
            <span className="text-base text-slate-600 text-center">
              Your site will look and work perfectly on every device, from
              phones to desktops.
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl px-6 py-7 flex flex-col justify-center items-center w-full sm:w-[340px] sm:h-[15rem] shadow-xl border border-slate-200"
          >
            <FaRocket className="text-4xl text-purple-500 mb-3" />
            <span className="text-xl text-slate-900 font-semibold mb-1">
              Performance Optimized
            </span>
            <span className="text-base text-slate-600 text-center">
              Fast load times and smooth interactions for a seamless user
              experience and better SEO.
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            viewport={{ once: false }}
            className="bg-white rounded-2xl px-6 py-7 flex flex-col justify-center items-center w-full sm:w-[340px] sm:h-[15rem] shadow-xl border border-slate-200"
          >
            <FaCogs className="text-4xl text-green-500 mb-3" />
            <span className="text-xl text-slate-900 font-semibold mb-1">
              Easy Maintenance
            </span>
            <span className="text-base text-slate-600 text-center">
              Clean, modular code and clear documentation make updates and
              scaling simple.
            </span>
          </motion.div>
        </div>
        {/* Süreç ve ekstra içerik */}
        <div className="w-full mt-12 flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-ovo"
          >
            My Web Design & Development Process
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
            viewport={{ once: false }}
            className="w-full flex flex-col items-center gap-3 text-slate-700 text-lg"
          >
            <li>
              <span className="font-semibold text-slate-900">
                1. Discovery & Strategy:
              </span>{" "}
              Understanding your business, audience, and goals to set a clear
              direction.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                2. Wireframing & Prototyping:
              </span>{" "}
              Creating blueprints and interactive prototypes to visualize
              structure and flow.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                3. Visual Design:
              </span>{" "}
              Designing engaging, on-brand interfaces with attention to detail
              and accessibility.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                4. Development:
              </span>{" "}
              Building responsive, high-performance websites using modern
              technologies.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                5. Testing & Launch:
              </span>{" "}
              Rigorous testing for quality, speed, and security before going
              live.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                6. Ongoing Support:
              </span>{" "}
              Providing updates, analytics, and improvements as your needs
              evolve.
            </li>
          </motion.ul>
        </div>
      </div>
      {/* Sıkça Sorulanlar */}
      {/* <div className="w-full max-w-3xl mt-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: false }}
          className="text-2xl font-bold text-slate-900 mb-4"
        >
          Frequently Asked Questions
        </motion.h3>
        <ul className="flex flex-col gap-4 text-slate-700 text-base">
          <li>
            <span className="font-semibold text-blue-600">
              Q: Can you redesign my existing website?
            </span>
            <br />
            Absolutely! I can modernize your current site for better
            performance, design, and usability.
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Q: Do you offer e-commerce solutions?
            </span>
            <br />
            Yes, I build secure, scalable online stores with seamless shopping
            experiences.
          </li>
          <li>
            <span className="font-semibold text-blue-600">
              Q: Will my website be SEO-friendly?
            </span>
            <br />
            Definitely. I follow best practices for SEO, accessibility, and
            performance from day one.
          </li>
        </ul>
      </div> */}
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.2 }}
        viewport={{ once: false }}
        className="mt-5 flex flex-col items-center"
      >
        <Link
          to="contact"
          smooth={true}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition cursor-pointer"
          onClick={handleWebModalClose}
        >
          Start Your Project <TiArrowRight className="text-2xl" />
        </Link>
        <span className="mt-2 text-slate-700 text-base">
          Ready to launch your next web project?
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

export default WebDesign;
