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
      className={`flex h-screen w-full snap-center flex-row items-center justify-between  px-10 ${props.invertedColumn === true && "flex-row-reverse"}`}
      variants={columnVariants}
      initial="hidden"
      animate={animControlls}
    >
      <img
        ref={ref}
        className="h-2/3 w-1/2 rounded-md object-cover shadow-2xl drop-shadow-2xl grayscale"
        src={props.imageSource}
        alt={props.imageAlt}
      />
      <div className="flex w-1/2 flex-col items-center justify-center gap-2 text-center uppercase text-primary-50">
        <h1 className="font-accent text-6xl text-action-500">{props.header}</h1>
        <p className="max-w-[70%] tracking-wide">{props.subheader}</p>
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
