import React from "react";
import { motion } from "framer-motion";
import { useTrackerContext } from "../../../context/TrackerContext";
interface Props {
  date: Date;
  weight?: number;
}
function DayCard(props: Props) {
  const disabled = props.date > new Date();
  const { AddProgress } = useTrackerContext();
  return (
    <motion.button
      onClick={() => {
        if (disabled) return;
        AddProgress({ weight: 80, date: props.date });
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ borderRadius: "10px" }}
      whileTap={{ scale: 0.9 }}
      className={`relative col-span-1 aspect-square overflow-hidden rounded-md border-action-500  bg-primary-950 text-center  shadow-sm transition-opacity  ${disabled ? "pointer-events-none opacity-20" : "opacity-90 hover:border-[0.1px] hover:opacity-100"}`}
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
