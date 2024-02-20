import React, { useState, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [scope, animate] = useAnimate();
  const form = useRef<HTMLFormElement>(null);

  const sentAnimation = async () => {
    if (!scope.current) return;
    animate(scope.current, { opacity: 1 }, { duration: 0.2 }).then(() => {
      animate(scope.current, { opacity: 0 }, { duration: 0.2, delay: 2 });
    });
  };
  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        if (name === "" || email === "" || message === "" || form === null)
          return;
        try {
          emailjs
            .sendForm(
              process.env.REACT_APP_SERVICE_ID as string,
              process.env.REACT_APP_TEMPLATE_ID as string,
              form.current as HTMLFormElement,
              {
                publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
              },
            )
            .then(() => {
              console.log("SUCCESS!");
            });
        } catch (error) {
          console.log("FAILED...", error);
        }

        setName("");
        setEmail("");
        setMessage("");
        sentAnimation();
      }}
      className="relative flex w-full max-w-xl flex-col items-start justify-center gap-1 rounded-sm border-2 border-action-500 bg-primary-950/50 p-4 shadow-md"
    >
      <label>Your name</label>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mb-3 w-full rounded-sm px-3 py-2 text-primary-950 placeholder-primary-950/60"
      />
      <label>Your email</label>
      <input
        type="email"
        name="user_email"
        placeholder="youremail@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-3 w-full rounded-sm px-3 py-2 text-primary-950 placeholder-primary-950/60"
      />
      <label>Your message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="mb-3 h-40 w-full resize-none rounded-sm px-3 py-2 text-primary-950 placeholder-primary-950/60 "
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.01 }}
        className="mx-auto min-w-40 rounded-sm bg-gradient-to-br from-action-500 to-action-600 px-3 py-1 font-accent text-xl uppercase text-primary-950 transition-opacity hover:opacity-80"
      >
        Send
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        ref={scope}
        exit={{ opacity: 0 }}
        className="pointer-events-none absolute bottom-2 left-[50%] z-10 -translate-x-[50%] border-2 border-action-500 bg-primary-950 p-2"
      >
        Email sent. Thank you!
      </motion.div>
    </form>
  );
}

export default ContactForm;
