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
      <section className="introduction font-ovo flex flex-col justify-center items-center leading-[5rem] mb-8">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[2.5rem] capitalize"
        >
          Connect with me
        </motion.p>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-[5.5rem] font-medium"
        >
          Get in touch
        </motion.h1>
      </section>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
        className="w-[70%] flex justify-center items-center text-[1.5rem] text-slate-600 text-center font-ovo font-normal"
      >
        If you have any feedback, questions, or just want to say hello — feel
        free to drop us a message. Your thoughts help us improve and grow.
      </motion.p>

      <form
        className="w-[60%] mt-10 flex flex-col items-center gap-6"
        ref={form}
        onSubmit={sendEmail}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false }}
          className="name-email w-full flex justify-center items-center gap-10"
        >
          <div className="name w-[70%] flex flex-col items-start">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full h-[3.5rem] px-4 py-1 border border-slate-700 rounded-xl"
            />
          </div>
          <div className="email w-[70%] flex flex-col items-start">
            <input
              type="email"
              id="email"
              placeholder="Enter your e-mail"
              required
              className="w-full h-[3.5rem] px-4 py-1 border border-slate-700 rounded-xl"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          className="message w-full  "
        >
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className="w-full min-h-[15rem] px-4 py-2 border border-slate-700 rounded-xl resize-none"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: false }}
          className="submit w-full"
        >
          <button
            type="submit"
            className="w-full h-[3.5rem] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white font-medium rounded-xl transition duration-700 cursor-pointer"
          >
            Send Message
          </button>
        </motion.div>
      </form>
    </div>
  );
}

export default Contact;
