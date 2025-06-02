import { useContext } from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "../components/AnimatedTestimonials";
import { TestimonialsContext } from "../context/TestimonialsContext";

function Testimonials() {
  const { testimonials } = useContext(TestimonialsContext);

  return (
    <div
      className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-8 bg-transparent
        max-[1025px]:gap-4 max-[1025px]:pt-15"
        id="testimonials"
    >
      <section className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem] mb-3
        max-[1025px]:leading-[4rem] max-[1025px]:mb-2
        max-[821px]:leading-[3.5rem] max-[821px]:mb-1">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[2.5rem]
            max-[1025px]:text-[2.2rem] max-[1025px]:text-center
            max-[821px]:text-[1.8rem] max-[821px]:text-center"
        >
          What Teammates Say
        </motion.p>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-[5.5rem] text-slate-800 font-medium font-ovo tracking-wide
            max-[1025px]:text-[4.8rem] max-[1025px]:text-center
            max-[821px]:text-[3.7rem] max-[821px]:text-center"
        >
          Testimonials
        </motion.h1>
      </section>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
        className="w-[70%] flex justify-center items-center text-[1.3rem] text-slate-600 text-center font-ovo font-normal
          max-[1025px]:text-[1.3rem] max-[1025px]:w-[85%] max-[1025px]:text-center
          max-[821px]:text-[1.2rem] max-[821px]:w-[85%] max-[821px]:text-center"
      >
        Throughout my journey as a Full-Stack Developer and Designer, I’ve had
        the opportunity to collaborate with talented professionals across
        various projects. These testimonials reflect the working relationships
        I’ve built with teammates, designers, and developers who have shared in
        the creative process with me.
      </motion.p>
      <div className="comments">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

export default Testimonials;
