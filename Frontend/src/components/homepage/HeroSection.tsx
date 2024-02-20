import React, { useEffect, useRef } from "react";
import HeroImage from "../../images/HeroImage.jpg";
import CustomButton from "../general/CustomButton";
import { Link } from "react-router-dom";
import { ElementOrSelector, motion, useAnimate } from "framer-motion";
import { useSettingsContext } from "../../context/SettingsContext";
function HeroSection() {
  const { firstLoad, setFirstLoad } = useSettingsContext();

  const [scope, animate] = useAnimate();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const introAnimation = async () => {
    if (!scope.current) return;
    if (imgRef !== null)
      animate(
        imgRef.current as ElementOrSelector,
        { opacity: 1 },
        { duration: 2 },
      );
    if (bgRef !== null)
      animate(
        bgRef.current as ElementOrSelector,
        { opacity: 0 },
        { duration: 2 },
      );
    if (textRef !== null)
      animate(
        textRef.current as ElementOrSelector,
        { opacity: 1 },
        { duration: 2 },
      );
  };
  useEffect(() => {
    if (!firstLoad) return;
    setFirstLoad(false);
    introAnimation();
  }, []);
  return (
    <div ref={scope} className="relative snap-center">
      <motion.img
        ref={imgRef}
        initial={{ opacity: 0 }}
        loading="eager"
        animate={firstLoad ? {} : { opacity: 1 }}
        src={HeroImage}
        alt="Gym"
        className="relative h-screen w-full object-cover"
      ></motion.img>
      <motion.div
        ref={bgRef}
        initial={{ opacity: firstLoad ? 1 : 0 }}
        className="absolute inset-0 bg-black"
      />
      <div className="absolute inset-0 bg-black/70" />
      <motion.div
        ref={textRef}
        initial={{ opacity: firstLoad ? 0 : 1 }}
        className="absolute left-1/2 top-1/2 flex -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center text-center font-accent uppercase text-primary-50"
      >
        <h2 className="text-xl font-thin sm:text-3xl">
          Build your strength with
        </h2>
        <h1 className="text-5xl tracking-wide sm:text-6xl">
          Powerforge fitness
        </h1>
        <p className="mb-2 mt-3 font-primary text-sm font-light tracking-wide text-primary-200 sm:text-base lg:max-w-[70%]">
          Explore our workouts, track your progress and become better version of
          yourself
        </p>
        <Link to="/Powerforge-Fitness/workouts">
          <CustomButton variant={"darker"} className="py-2">
            Check workouts
          </CustomButton>
        </Link>
      </motion.div>
    </div>
  );
}

export default HeroSection;
