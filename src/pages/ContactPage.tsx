import React from "react";
import ContactBackground from "../images/ContactImage.jpg";
import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";
function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start gap-2 p-4 text-center uppercase text-primary-50">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        loading="eager"
        className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
        src={ContactBackground}
        alt="People train"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-black/70" />
      <h1 className="mt-16 font-accent text-5xl text-action-500 sm:text-6xl">
        Contact us
      </h1>
      <p className="mb-3 max-w-3xl text-sm sm:text-base">
        We value your feedback! Whether you have suggestions, specific workouts
        you'd like to see, or ideas for new features, please don't hesitate to
        get in touch with us. Your input helps us create a better fitness
        experience for everyone.
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
