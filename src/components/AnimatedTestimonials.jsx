"use client";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
        className="w-full max-w-[90rem] flex items-center justify-center gap-[5rem] mt-8
         max-[1025px]:w-[60rem] max-[1025px]:gap-[1rem] max-[1025px]:flex-col max-[1025px]:mt-1
         max-[821px]:w-[40rem] max-[821px]:gap-[0.5rem] max-[821px]:flex-col max-[821px]:mt-1
         max-[769px]:w-[42rem] max-[769px]:gap-[0.5rem] max-[769px]:flex-col max-[769px]:mt-1
         max-[431px]:w-[22rem] max-[431px]:gap-[0.5rem] max-[431px]:flex-col max-[431px]:mt-1
         max-[391px]:w-[20rem] max-[391px]:gap-[0.5rem] max-[391px]:flex-col max-[391px]:mt-1
         max-[376px]:w-[20rem] max-[376px]:gap-[0.5rem] max-[376px]:flex-col max-[376px]:mt-1"
      >
        {/* Resim */}
        <div className="relative h-90 w-90 flex-shrink-0
          max-[1025px]:w-[15rem] max-[1025px]:h-[15rem] max-[1025px]:mx-auto
          max-[821px]:w-[10rem] max-[821px]:h-[10rem] max-[821px]:mx-auto
          max-[769px]:w-[8rem] max-[769px]:h-[8rem] max-[769px]:mx-auto
          max-[431px]:w-[8rem] max-[431px]:h-[8rem] max-[431px]:mx-auto
          max-[391px]:w-[6rem] max-[391px]:h-[6rem] max-[391px]:mx-auto
          max-[376px]:w-[5rem] max-[376px]:h-[5rem] max-[376px]:mx-auto">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -40, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom
                max-[1025px]:w-[15rem] max-[1025px]:h-[15rem] max-[1025px]:left-1/2
                max-[1025px]:-translate-x-1/2
                max-[821px]:w-[10rem] max-[821px]:h-[10rem] max-[821px]:left-1/2
                max-[821px]:-translate-x-1/2
                max-[769px]:w-[8rem] max-[769px]:h-[8rem] max-[769px]:left-1/2
                max-[769px]:-translate-x-1/2
                max-[431px]:w-[8rem] max-[431px]:h-[8rem] max-[431px]:left-1/2
                max-[431px]:-translate-x-1/2
                max-[391px]:w-[6rem] max-[391px]:h-[6rem] max-[391px]:left-1/2
                max-[391px]:-translate-x-1/2
                max-[376px]:w-[5rem] max-[376px]:h-[5rem] max-[376px]:left-1/2
                max-[376px]:-translate-x-1/2"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={300}
                  height={300}
                  draggable={false}
                  className="h-full w-full rounded-xl object-cover object-center
                  max-[1025px]:h-[15rem] max-[1025px]:w-[15rem]
                  max-[821px]:h-[10rem] max-[821px]:w-[10rem]
                  max-[769px]:h-[8rem] max-[769px]:w-[8rem]
                  max-[431px]:h-[8rem] max-[431px]:w-[8rem]
                  max-[391px]:h-[6rem] max-[391px]:w-[6rem]
                  max-[376px]:h-[5rem] max-[376px]:w-[5rem]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Yorum */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
          className="w-full max-w-3xl flex flex-col justify-between py-2
          max-[1025px]:justify-center max-[1025px]:items-center"
        >
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-slate-900
            max-[1025px]:text-2xl max-[1025px]:text-center
            max-[821px]:text-xl max-[821px]:text-center
            max-[769px]:text-xl max-[769px]:text-center
            max-[431px]:text-lg max-[431px]:text-center
            max-[391px]:text-lg max-[391px]:text-center
            max-[376px]:text-md max-[376px]:text-center">
              {testimonials[active].name}
            </h3>
            <p className="text-md text-slate-700
            max-[1025px]:text-md max-[1025px]:text-center
            max-[821px]:text-md max-[821px]:text-center
            max-[769px]:text-md max-[769px]:text-center
            max-[431px]:text-sm max-[431px]:text-center
            max-[391px]:text-sm max-[391px]:text-center
            max-[376px]:text-sm max-[376px]:text-center">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 text-[1.1rem] text-slate-700
            max-[1025px]:text-md max-[1025px]:text-center
            max-[821px]:text-[1rem] max-[821px]:text-center
            max-[769px]:text-[0.95rem] max-[769px]:text-center
            max-[431px]:text-[0.8rem] max-[431px]:text-center max-[431px]:mt-2 max-[431px]:overflow-y-auto max-[431px]:h-[12rem]
            max-[391px]:text-[0.8rem] max-[391px]:text-center max-[391px]:mt-2 max-[391px]:overflow-y-auto max-[391px]:h-[10rem]
            max-[376px]:text-[0.75rem] max-[376px]:text-center max-[376px]:mt-2 max-[376px]:overflow-y-auto max-[376px]:h-[7rem]">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-8 md:pt-4
          max-[431px]:pt-2">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 cursor-pointer
              max-[431px]:h-7 max-[431px]:w-7
              max-[391px]:h-6 max-[391px]:w-6
              max-[376px]:h-5 max-[376px]:w-5"
            >
              <RiArrowLeftWideFill className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400
              max-[376px]:h-3 max-[376px]:w-3" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 cursor-pointer
              max-[431px]:h-7 max-[431px]:w-7
              max-[391px]:h-6 max-[391px]:w-6
              max-[376px]:h-5 max-[376px]:w-5"
            >
              <RiArrowRightWideFill className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400
              max-[376px]:h-3 max-[376px]:w-3" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
