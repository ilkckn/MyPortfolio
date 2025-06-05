import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ysq1gak",
        "template_wuf4xge",
        form.current,
        "zmGbSwBwkuwhfoTPQ"
      )
      .then(
        () => {
          toast.custom(
            <div className="w-[22rem] flex justify-center items-center gap-3 bg-gradient-to-r from-green-700 to-green-500  text-white px-6 py-4 rounded-xl shadow-md text-lg">
              <CheckCircleIcon className="h-7 w-7 text-green-400" />
              <span>Message sent successfully!</span>
            </div>,
            { duration: 5000, position: "top-center" }
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="contact w-full min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden px-4"
      id="contact"
    >
      <section className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem] mb-8
      max-[1025px]:leading-[4rem] max-[1025px]:mb-6
      max-[821px]:leading-[3.5rem] max-[821px]:mb-4
      max-[431px]:leading-[2.5rem] max-[431px]:mb-2">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[2.5rem] capitalize
          max-[1025]:text-[2.2rem] max-[1025]:text-center
          max-[821px]:text-[1.8rem] max-[821px]:text-center
          max-[431px]:text-[1.3rem] max-[431px]:text-center"
        >
          Connect with me
        </motion.p>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-[5.5rem] font-medium
          max-[1025px]:text-[4.8rem] max-[1025px]:text-center
          max-[821px]:text-[3.7rem] max-[821px]:text-center text-slate-800 font-ovo tracking-wide
          max-[431px]:text-[2.5rem] max-[431px]:text-center"
        >
          Get in touch
        </motion.h1>
      </section>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
        className="w-[70%] flex justify-center items-center text-[1.5rem] text-slate-600 text-center font-ovo font-normal
        max-[1025px]:text-[1.4rem] max-[1025px]:w-[85%] max-[1025px]:text-center
        max-[821px]:text-[1.2rem] max-[821px]:w-[85%] max-[821px]:text-center
        max-[431px]:text-[1rem] max-[431px]:w-[90%] max-[431px]:text-center max-[431px]:mt-3 max-[431px]:mb-2"
      >
        If you have any feedback, questions, or just want to say hello — feel
        free to drop us a message. Your thoughts help us improve and grow.
      </motion.p>

      <form
        className="w-[60%] mt-10 flex flex-col items-center gap-6
        max-[1025px]:w-[80%] max-[1025px]:mt-8
        max-[821px]:w-[80%] max-[821px]:mt-6
        max-[431px]:w-[90%] max-[431px]:mt-4 max-[431px]:gap-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false }}
          className="name-email w-full flex justify-center items-center gap-10
          max-[1025px]:flex-col max-[1025px]:gap-3 max-[1025px]:w-[100%]"
        >
          <div className="name w-[70%] flex flex-col items-start
          max-[1025px]:w-[100%]">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full h-[3.5rem] px-4 py-1 border border-slate-700 rounded-xl
              max-[431px]:max-[431px]:h-[2.6rem] max-[431px]:rounded-lg"
            />
          </div>
          <div className="email w-[70%] flex flex-col items-start
          max-[1025px]:w-[100%]">
            <input
              type="email"
              id="email"
              placeholder="Enter your e-mail"
              required
              className="w-full h-[3.5rem] px-4 py-1 border border-slate-700 rounded-xl
              max-[431px]:max-[431px]:h-[2.6rem] max-[431px]:rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          className="message w-full
          max-[431px]:h-[12rem] max-[431px]:rounded-lg"
        >
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className="w-full min-h-[15rem] px-4 py-2 border border-slate-700 rounded-xl resize-none
            max-[431px]:min-h-[12rem] max-[431px]:rounded-lg max-[431]:"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: false }}
          className="submit w-full"
        >
          <button
            type="submit"
            className="w-full h-[3.5rem] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white font-medium rounded-xl transition duration-700 cursor-pointer
            max-[431px]:h-[3rem] max-[431px]:"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </div>
  );
}

export default Contact;
