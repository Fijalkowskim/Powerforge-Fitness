import React from "react";
import { IoIosFitness } from "react-icons/io";
import NavbarLink from "./NavbarLink";
import { motion } from "framer-motion";
import CustomButton from "../general/CustomButton";
const navlinks = [
  { name: "Home", to: "/" },
  { name: "Workouts", to: "/workouts" },
  { name: "Progress tracker", to: "/tracker" },
  { name: "BMI Calculator", to: "/bmi" },
  { name: "About", to: "/about" },
  { name: "Contact us", to: "/contact" },
];
function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-20 flex w-full flex-row items-center justify-center gap-8 bg-primary-900 px-[10%] py-3 text-primary-50 shadow-md">
      <div className="pointer-events-none mr-auto flex items-center justify-center gap-1 text-center font-accent text-lg font-light">
        <IoIosFitness className="text-2xl text-action-400" />
        <p>Powerforge fitness</p>
      </div>
      {navlinks.map((n) => (
        <NavbarLink name={n.name} to={n.to} />
      ))}
      <CustomButton className="font-primary font-semibold">
        Sing in
      </CustomButton>
    </div>
  );
}

export default Navbar;
