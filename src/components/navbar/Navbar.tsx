import React, { useEffect, useRef, useState } from "react";
import { IoIosFitness } from "react-icons/io";
import NavbarLink from "./NavbarLink";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import { useSettingsContext } from "../../context/SettingsContext";

const navlinks = [
  { name: "Home", to: "/" },
  { name: "Workouts", to: "/workouts" },
  { name: "Progress tracker", to: "/tracker" },
  { name: "BMI Calculator", to: "/bmi" },
  { name: "Contact", to: "/contact" },
];
function Navbar() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setDisableScroll } = useSettingsContext();
  const toggleMobileMenu = () => {
    setDisableScroll(!isMobileMenuOpen);
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen && !isInView) setIsMobileMenuOpen(false);
  }, [isInView, isMobileMenuOpen]);
  return (
    <div
      className={`fixed left-0 top-0 z-20 flex w-screen flex-row items-center justify-center gap-8 bg-primary-900 px-5 py-3 text-primary-50 shadow-md sm:px-20 xl:px-40`}
    >
      <div className="pointer-events-none mr-auto flex items-center justify-center gap-1 text-center font-accent text-lg font-light">
        <IoIosFitness className="text-2xl text-action-400" />
        <p>Powerforge fitness</p>
      </div>
      <div
        className={`hidden flex-row items-center justify-center gap-8 lg:flex`}
      >
        {navlinks.map((n) => (
          <NavbarLink name={n.name} to={n.to} />
        ))}
      </div>
      <motion.button
        ref={ref}
        className="ml-auto cursor-pointer text-3xl lg:hidden"
        whileHover={{ scaleY: 1.1 }}
        onClick={toggleMobileMenu}
      >
        <RxHamburgerMenu />
      </motion.button>
      {/* Hamburger menu */}
      <AnimatePresence>
        {isInView && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-black/40"
          >
            <div
              className="absolute inset-0"
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
            />
            <motion.ul
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.1 }}
              className="absolute right-0 top-0 flex h-full w-fit flex-col items-end gap-4 bg-primary-900 p-4 px-4 text-right text-2xl shadow-md"
            >
              <motion.button
                className="cursor-pointer text-4xl"
                whileHover={{ scale: 1.1 }}
                onClick={toggleMobileMenu}
              >
                <GoX />
              </motion.button>
              {navlinks.map((n) => (
                <div
                  onClick={() => {
                    toggleMobileMenu();
                  }}
                >
                  <NavbarLink name={n.name} to={n.to} />
                </div>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
