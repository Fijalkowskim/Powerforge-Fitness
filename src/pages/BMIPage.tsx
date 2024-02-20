import React from "react";
import BMIBackground from "../images/BmiBackground.jpg";
import BMICalculator from "../components/bmi-page/BMICalculator";
import { motion } from "framer-motion";
function BMIPage() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-primary-900">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
        src={BMIBackground}
        alt="Running man"
      />
      <BMICalculator />
    </div>
  );
}

export default BMIPage;
