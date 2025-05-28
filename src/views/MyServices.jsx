import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { FaPencilRuler } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import GraphicDesign from "./GraphicDesign";
import UiDesign from "./UiDesign";
import WebDesign from "./WebDesign";

function MyServices() {
  const [isWebModalOpen, setIsWebModalOpen] = useState(false);
  const [isUiModalOpen, setIsUiModalOpen] = useState(false);
  const [isGraphicModalOpen, setIsGraphicModalOpen] = useState(false);

  const handleWebModalOpen = () => setIsWebModalOpen(true);
  const handleWebModalClose = () => setIsWebModalOpen(false);

  const handleUiModalOpen = () => setIsUiModalOpen(true);
  const handleUiModalClose = () => setIsUiModalOpen(false);

  const handleGraphicModalOpen = () => setIsGraphicModalOpen(true);
  const handleGraphicModalClose = () => setIsGraphicModalOpen(false);

  useEffect(() => {
    if (isWebModalOpen || isUiModalOpen || isGraphicModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isWebModalOpen, isUiModalOpen, isGraphicModalOpen]);

  return (
    <div
      className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-8 bg-transparent"
      id="my-services"
    >
      <section className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem] mb-3">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[2.5rem]"
        >
          What I offer
        </motion.p>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-[5.5rem] text-slate-800 font-medium font-ovo tracking-wide"
        >
          My Services
        </motion.h1>
      </section>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
        className="w-[70%] flex justify-center items-center text-[1.3rem] text-slate-600 text-center font-ovo font-normal"
      >
        As a versatile Full-Stack Developer and Designer, I offer a range of
        digital services to help bring your ideas to life. Whether you need a
        responsive website, an intuitive user interface, or a unique logo, I
        combine creativity with technical precision to deliver high-quality
        results tailored to your needs.
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        <div className="flex flex-wrap items-center justify-center gap-8 w-full mt-3">
          {/* Web Design Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
            onClick={(e) => {
              e.stopPropagation();
              handleWebModalOpen();
            }}
          >
            <GlareCard>
              <div className="flex flex-col items-center justify-center h-full w-full p-6">
                <div className="text-[3.5rem] mb-6">
                  <svg width="0" height="0">
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#60a5fa" offset="0%" />
                      <stop stopColor="#a855f7" offset="50%" />
                      <stop stopColor="#ec4899" offset="100%" />
                    </linearGradient>
                  </svg>
                  <TfiWorld style={{ fill: "url(#gradient)" }} />
                </div>

                <span className="text-3xl text-slate-100 font-outfit font-semibold mb-2">
                  Web Design
                </span>
                <span className="text-lg font-normal font-outfit text-slate-200 text-center">
                  Modern, responsive and user-oriented web interfaces.
                </span>
                <span className="inline-flex gap-2 w-[9rem] border-b text-[1.2rem] font-normal font-outfit relative mt-4 text-white">
                  Click for more{" "}
                  <TiArrowRight className="absolute top-2 right-0" />
                </span>
              </div>
            </GlareCard>
          </motion.div>
          {/* UI Design Card */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: false }}
            onClick={(e) => {
              e.stopPropagation();
              handleUiModalOpen();
            }}
          >
            <GlareCard>
              <div className="flex flex-col items-center justify-center h-full w-full p-6">
                <div className="text-[3.5rem] mb-6">
                  <svg width="0" height="0">
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#60a5fa" offset="0%" />
                      <stop stopColor="#a855f7" offset="50%" />
                      <stop stopColor="#ec4899" offset="100%" />
                    </linearGradient>
                  </svg>
                  <MdDesignServices style={{ fill: "url(#gradient)" }} />
                </div>
                <span className="text-3xl text-slate-100 font-outfit font-semibold mb-2">
                  UI Design
                </span>
                <span className="text-lg font-normal font-outfit text-slate-200 text-center">
                  Aesthetic and functional UI designs that prioritize user
                  experience.
                </span>
                <span className="inline-flex gap-2 w-[9rem] border-b text-[1.2rem] font-normal font-outfit relative mt-4 text-white">
                  Click for more{" "}
                  <TiArrowRight className="absolute top-2 right-0" />
                </span>
              </div>
            </GlareCard>
          </motion.div>
          {/* Graphic Design Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: false }}
            onClick={(e) => {
              e.stopPropagation();
              handleGraphicModalOpen();
            }}
          >
            <GlareCard>
              <div className="flex flex-col items-center justify-center h-full w-full p-6">
                <div className="text-[3.5rem] mb-6">
                  <svg width="0" height="0">
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#60a5fa" offset="0%" />
                      <stop stopColor="#a855f7" offset="50%" />
                      <stop stopColor="#ec4899" offset="100%" />
                    </linearGradient>
                  </svg>
                  <FaPencilRuler style={{ fill: "url(#gradient)" }} />
                </div>
                <span className="text-3xl text-slate-100 font-outfit font-semibold mb-2">
                  Graphic Design
                </span>
                <span className="text-lg font-normal font-outfit text-slate-200 text-center">
                  Creative logo and graphic designs for your brand and projects.
                </span>
                <span className="inline-flex gap-2 w-[9rem] border-b text-[1.2rem] font-normal font-outfit relative mt-4 text-white">
                  Click for more
                  <TiArrowRight className="absolute top-2 right-0" />
                </span>
              </div>
            </GlareCard>
          </motion.div>
        </div>
      </div>

      {/* Web Design Modal */}
      {isWebModalOpen && (
        <div className="w-full min-h-[100vh] fixed top-0 left-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white shadow-2xl w-full min-h-[100vh] flex justify-center overflow-y-auto">
            <WebDesign handleWebModalClose={handleWebModalClose} />
          </div>
        </div>
      )}
      {/* UI Design Modal */}
      {isUiModalOpen && (
        <div className="w-full min-h-[100vh] fixed top-0 left-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white shadow-2xl w-full min-h-[100vh] flex justify-center overflow-y-auto">
            <UiDesign handleWebModalClose={handleUiModalClose} />
          </div>
        </div>
      )}
      {/* Graphic Design Modal */}
      {isGraphicModalOpen && (
        <div className="w-full min-h-[100vh] fixed top-0 left-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white shadow-2xl w-full min-h-[100vh] flex justify-center overflow-y-auto">
            <GraphicDesign handleWebModalClose={handleGraphicModalClose} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyServices;
