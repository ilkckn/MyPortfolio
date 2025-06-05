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
      className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-8 bg-transparent
        max-[821px]:pt-10
        max-[769px]:gap-6
        max-[431px]:gap-2
        max-[391px]:gap-1 max-[391px]:pt-15"
      id="my-services"
    >
      <section
        className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem] mb-3
          max-[1025px]:leading-[4.5rem] max-[1025px]:mb-0
          max-[821px]:leading-[4rem] max-[821px]:mb-0
          max-[769px]:leading-[3.5rem] max-[769px]:mb-0
          max-[431px]:leading-[2.5rem] max-[431px]:mb-0
          max-[391px]:leading-[2rem] max-[391px]:mb-0
          max-[376px]:leading-[2rem] max-[376px]:mb-0"
      >
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[2.5rem]
            max-[1025px]:text-[2.4rem] max-[1025px]:text-center
            max-[821px]:text-[2.2rem]
            max-[821px]:text-center
            max-[769px]:text-[2rem] max-[769px]:text-center
            max-[431px]:text-[1.3rem] max-[431px]:text-center
            max-[391px]:text-[1.2rem] max-[391px]:text-center
            max-[376px]:text-[1.3rem] max-[376px]:text-center"
        >
          What I offer
        </motion.p>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-[5.5rem] text-slate-800 font-medium font-ovo tracking-wide
            max-[1025px]:text-[4.5rem] max-[1025px]:text-center
            max-[821px]:text-[4.5rem]
            max-[821px]:text-center
            max-[769px]:text-[3.5rem] max-[769px]:text-center
            max-[431px]:text-[2.5rem] max-[431px]:text-center
            max-[391px]:text-[2rem] max-[391px]:text-center
            max-[376px]:text-[2.2rem] max-[376px]:text-center"
        >
          My Services
        </motion.h1>
      </section>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
        className="w-[70%] flex justify-center items-center text-[1.3rem] text-slate-600 text-center font-ovo font-normal
          max-[1025px]:text-[1.2rem] max-[1025px]:w-[90%] max-[1025px]:text-center
          max-[821px]:text-[1.2rem] max-[821px]:w-[85%] max-[821px]:text-center
          max-[769px]:text-[1.1rem] max-[769px]:w-[90%] max-[769px]:text-center
          max-[431px]:text-[1rem] max-[431px]:w-[90%] max-[431px]:text-center max-[431px]:mt-3
          max-[391px]:text-[0.9rem] max-[391px]:w-[90%] max-[391px]:text-center max-[391px]:mt-2
          max-[376px]:text-[1rem] max-[376px]:w-[90%] max-[376px]:text-center max-[376px]:mt-2 max-[376px]:leading-[1.4rem]"
      >
        As a versatile Full-Stack Developer and Designer, I offer a range of
        digital services to help bring your ideas to life. Whether you need a
        responsive website, an intuitive user interface, or a unique logo, I
        combine creativity with technical precision to deliver high-quality
        results tailored to your needs.
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        <div
          className="flex flex-wrap items-center justify-center gap-8 w-full mt-3
            max-[1025px]:gap-2 max-[1025px]:flex-col
            max-[821px]:flex-col
            max-[769px]:flex-col
            max-[431px]:flex-col
            max-[391px]:flex-col
            max-[376px]:flex-col max-[376px]:overflow-x-auto max-[376px]:w-[22rem] max-[376px]:h-[10rem]"
        >
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
              <div
                className="flex flex-col items-center justify-center h-full w-full p-6
                  max-[1025px]:p-3
                  max-[821px]:p-2
                  max-[769px]:p-1"
              >
                <div
                  className="text-[3.5rem] mb-6
                    max-[1025px]:text-[3rem] max-[1025px]:mb-3
                    max-[821px]:text-[2.5rem] max-[821px]:mb-3
                    max-[769px]:text-[2rem] max-[769px]:mb-3
                    max-[431px]:text-[1.5rem] max-[431px]:mb-3
                    max-[391px]:text-[1.2rem] max-[391px]:mb-3
                    max-[376px]:text-[1.5rem] max-[376px]:mb-3"
                >
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

                <span
                  className="text-3xl text-slate-100 font-outfit font-semibold mb-2
                    max-[1025px]:text-[1.8rem] max-[1025px]:mb-1
                    max-[821px]:text-[1.5rem]
                    max-[769px]:text-[1.3rem]
                    max-[431px]:text-[1.2rem]
                    max-[391px]:text-[1.1rem]
                    max-[376px]:text-[1.2rem]"
                >
                  Web Design
                </span>
                <span
                  className="text-lg font-normal font-outfit text-slate-200 text-center
                    max-[1025px]:text-[1.2rem] max-[1025px]:text-center
                    max-[821px]:text-[1rem]
                    max-[769px]:text-[0.9rem]
                    max-[431px]:text-[0.8rem]
                    max-[391px]:text-[0.8rem]
                    max-[376px]:text-[0.9rem]"
                >
                  Modern, responsive and user-oriented web interfaces.
                </span>
                <span
                  className="inline-flex gap-2 w-[9rem] border-b text-[1.2rem] font-normal font-outfit relative mt-4 text-white
                    max-[1025px]:text-[1.2rem] max-[1025px]:mt-2 max-[1025px]:w-[9rem]
                    max-[821px]:text-[1rem] max-[821px]:mt-2 max-[821px]:w-[7.5rem]
                    max-[769px]:text-[0.9rem] max-[769px]:mt-2 max-[769px]:w-[6.5rem]
                    max-[431px]:text-[0.8rem] max-[431px]:mt-2 max-[431px]:w-[6rem]
                    max-[391px]:text-[0.7rem] max-[391px]:mt-2 max-[391px]:w-[5rem]
                    max-[376px]:text-[0.8rem] max-[376px]:mt-2 max-[376px]:w-[6rem]"
                >
                  Click for more{" "}
                  <TiArrowRight
                    className="absolute top-2 right-0
                    max-[1025px]:text-[1.5rem] max-[1025px]:top-1
                    max-[821px]:text-[1.3rem] max-[821px]:top-1
                    max-[769px]:text-[1.2rem] max-[769px]:top-0.5 max-[769px]:-right-1
                    max-[431px]:text-[1rem] max-[431px]:top-0.5 max-[431px]:-right-1
                    max-[391px]:text-[0.9rem] max-[391px]:top-0.5 max-[391px]:-right-1
                    max-[376px]:text-[1rem] max-[376px]:top-0.5 max-[376px]:-right-1"
                  />
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
              <div
                className="flex flex-col items-center justify-center h-full w-full p-6
                  max-[1025px]:p-3
                  max-[821px]:p-2
                  max-[769px]:p-1"
              >
                <div
                  className="text-[3.5rem] mb-6
                    max-[1025px]:text-[3rem] max-[1025px]:mb-3
                    max-[821px]:text-[2.5rem] max-[821px]:mb-3
                    max-[769px]:text-[2rem] max-[769px]:mb-3
                    max-[431px]:text-[1.5rem] max-[431px]:mb-3
                    max-[391px]:text-[1.2rem] max-[391px]:mb-3
                    max-[376px]:text-[1.5rem] max-[376px]:mb-3"
                >
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
                <span
                  className="text-3xl text-slate-100 font-outfit font-semibold mb-2
                    max-[1025px]:text-[1.8rem] max-[1025px]:mb-1
                    max-[821px]:text-[1.5rem]
                    max-[769px]:text-[1.3rem]
                    max-[431px]:text-[1.2rem]
                    max-[391px]:text-[1.1rem]
                    max-[376px]:text-[1.2rem]"
                >
                  UI Design
                </span>
                <span
                  className="text-lg font-normal font-outfit text-slate-200 text-center
                    max-[1025px]:text-[1.2rem] max-[1025px]:text-center
                    max-[821px]:text-[1rem]
                    max-[769px]:text-[0.9rem]
                    max-[431px]:text-[0.8rem]
                    max-[391px]:text-[0.8rem]
                    max-[376px]:text-[0.9rem]"
                >
                  Aesthetic and functional UI designs that prioritize user
                  experience.
                </span>
                <span
                  className="inline-flex gap-2 w-[9rem] border-b text-[1.2rem] font-normal font-outfit relative mt-4 text-white
                    max-[1025px]:text-[1.2rem] max-[1025px]:mt-2 max-[1025px]:w-[9rem]
                    max-[821px]:text-[1rem] max-[821px]:mt-2 max-[821px]:w-[7.5rem]
                    max-[769px]:text-[0.9rem] max-[769px]:mt-2 max-[769px]:w-[6.5rem]
                    max-[431px]:text-[0.8rem] max-[431px]:mt-2 max-[431px]:w-[6rem]
                    max-[391px]:text-[0.7rem] max-[391px]:mt-2 max-[391px]:w-[5rem]
                    max-[376px]:text-[0.8rem] max-[376px]:mt-2 max-[376px]:w-[6rem]"
                >
                  Click for more
                  <TiArrowRight
                    className="absolute top-2 right-0
                      max-[1025px]:text-[1.5rem] max-[1025px]:top-1
                      max-[821px]:text-[1.3rem] max-[821px]:top-1
                      max-[769px]:text-[1.2rem] max-[769px]:top-0.5 max-[769px]:-right-1
                      max-[431px]:text-[1rem] max-[431px]:top-0.5 max-[431px]:-right-1
                      max-[391px]:text-[0.9rem] max-[391px]:top-0.5 max-[391px]:-right-1
                      max-[376px]:text-[1rem] max-[376px]:top-0.5 max-[376px]:-right-1"
                  />
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
              <div
                className="flex flex-col items-center justify-center h-full w-full p-6
                  max-[1025px]:p-3
                  max-[821px]:p-2
                  max-[769px]:p-1"
              >
                <div
                  className="text-[3.5rem] mb-6
                    max-[1025px]:text-[3rem] max-[1025px]:mb-3
                    max-[821px]:text-[2.5rem] max-[821px]:mb-3
                    max-[769px]:text-[2rem] max-[769px]:mb-3
                    max-[431px]:text-[1.5rem] max-[431px]:mb-3
                    max-[391px]:text-[1.2rem] max-[391px]:mb-3
                    max-[376px]:text-[1.5rem] max-[376px]:mb-3"
                >
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
                <span
                  className="text-3xl text-slate-100 font-outfit font-semibold mb-2
                    max-[1025px]:text-[1.8rem] max-[1025px]:mb-1
                    max-[821px]:text-[1.5rem]
                    max-[769px]:text-[1.3rem]
                    max-[431px]:text-[1.2rem]
                    max-[391px]:text-[1.1rem]
                    max-[376px]:text-[1.2rem]"
                >
                  Graphic Design
                </span>
                <span
                  className="text-lg font-normal font-outfit text-slate-200 text-center
                    max-[1025px]:text-[1.2rem] max-[1025px]:text-center
                    max-[821px]:text-[1rem]
                    max-[769px]:text-[0.9rem]
                    max-[431px]:text-[0.8rem]
                    max-[391px]:text-[0.8rem]
                    max-[376px]:text-[0.9rem]"
                >
                  Creative logo and graphic designs for your brand and projects.
                </span>
                <span
                  className="inline-flex gap-2 w-[9rem] border-b text-[1.2rem] font-normal font-outfit relative mt-4 text-white
                    max-[1025px]:text-[1.2rem] max-[1025px]:mt-2 max-[1025px]:w-[9rem]
                    max-[821px]:text-[1rem] max-[821px]:mt-2 max-[821px]:w-[7.5rem]
                    max-[769px]:text-[0.9rem] max-[769px]:mt-2 max-[769px]:w-[6.5rem]
                    max-[431px]:text-[0.8rem] max-[431px]:mt-2 max-[431px]:w-[6rem]
                    max-[391px]:text-[0.7rem] max-[391px]:mt-2 max-[391px]:w-[5rem]
                    max-[376px]:text-[0.8rem] max-[376px]:mt-2 max-[376px]:w-[6rem]"
                >
                  Click for more
                  <TiArrowRight
                    className="absolute top-2 right-0
                      max-[1025px]:text-[1.5rem] max-[1025px]:top-1
                      max-[821px]:text-[1.3rem] max-[821px]:top-1
                      max-[769px]:text-[1.2rem] max-[769px]:top-0.5 max-[769px]:-right-1
                      max-[431px]:text-[1rem] max-[431px]:top-0.5 max-[431px]:-right-1
                      max-[391px]:text-[0.9rem] max-[391px]:top-0.5 max-[391px]:-right-1
                      max-[376px]:text-[1rem] max-[376px]:top-0.5 max-[376px]:-right-1"
                  />
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
