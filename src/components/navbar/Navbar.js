import React from "react";
import { IoIosFitness } from "react-icons/io";
import NavbarLink from "./NavbarLink";
const navlinks = [
  { name: "Home", to: "/" },
  { name: "Workouts", to: "/" },
  { name: "Products", to: "/" },
  { name: "About", to: "/" },
  { name: "Contact us", to: "/" },
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
    </div>
  );
}

export default Navbar;
