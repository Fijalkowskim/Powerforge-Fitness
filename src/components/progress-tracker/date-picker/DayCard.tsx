import React from "react";
import { motion } from "framer-motion";
interface Props {
  date: Date;
  weight?: number;
}
function DayCard(props: Props) {
  return (
    <motion.button
      whileHover={{ borderRadius: "10px" }}
      className="relative col-span-1 aspect-square overflow-hidden rounded-md border-action-500  bg-primary-950 text-center opacity-90 shadow-sm transition-opacity hover:border-[0.1px] hover:opacity-100"
    >
      <p className="text-base text-action-500">
        {props.weight ? props.weight + " kg" : "-"}
      </p>
      <p className="absolute bottom-0 right-1 text-xs opacity-80">
        {props.date.getDate()}
      </p>
    </motion.button>
  );
}

export default DayCard;
