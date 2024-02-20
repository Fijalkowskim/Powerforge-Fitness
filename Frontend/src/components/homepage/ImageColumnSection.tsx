import React, { useEffect, useRef } from "react";
import CustomButton from "../general/CustomButton";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
interface Props {
  imageSource: string;
  imageAlt: string;
  header: string;
  subheader: string;
  buttonText: string;
  buttonLinkTo: string;
  invertedColumn?: boolean;
  imageDarken?: number;
}
const columnVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2 } },
};
function ImageColumnSection(props: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      animControlls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      className={`relative flex h-screen w-full snap-center flex-row items-center justify-between px-10 ${props.invertedColumn === true && "flex-row-reverse"}`}
      variants={columnVariants}
      initial="hidden"
      animate={animControlls}
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-5/6 w-5/6 translate-x-[-50%] translate-y-[-50%] rounded-lg object-cover shadow-2xl drop-shadow-2xl lg:relative lg:left-0 lg:top-0 lg:h-2/3 lg:w-1/2 lg:translate-x-0 lg:translate-y-0">
        <img
          ref={ref}
          src={props.imageSource}
          alt={props.imageAlt}
          className="h-full w-full object-cover grayscale"
        />
        <div
          className={`absolute inset-0 h-full w-full bg-black/${props.imageDarken ?? 60} lg:hidden`}
        />
      </div>

      <div className="mx-auto flex max-w-[83%] flex-col items-center justify-center gap-4 text-center uppercase text-primary-50 lg:w-1/2 lg:gap-2">
        <h1 className="font-accent text-5xl text-action-500 lg:text-6xl">
          {props.header}
        </h1>
        <p className="text-sm font-extralight md:text-base lg:max-w-[70%] lg:font-normal lg:tracking-wide">
          {props.subheader}
        </p>
        <Link to={props.buttonLinkTo}>
          <CustomButton variant={"darker"} className="w-60 py-2">
            {props.buttonText}
          </CustomButton>
        </Link>
      </div>
    </motion.div>
  );
}

export default ImageColumnSection;
