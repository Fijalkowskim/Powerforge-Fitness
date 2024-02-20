import React from "react";
import { motion } from "framer-motion";
import { useTrackerContext } from "../../../context/TrackerContext";
import { ProgressData } from "../../../models/ProgressData";
interface Props {
  date: Date;
  progressData?: ProgressData;
}
function DayCard(props: Props) {
  const disabled = props.date > new Date();

  const { EditingProgressData } = useTrackerContext();
  return (
    <motion.button
      onClick={() => {
        if (disabled) return;
        EditingProgressData(props.date, props.progressData);
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ borderRadius: "10px" }}
      whileTap={{ scale: 0.9 }}
      className={`relative col-span-1 aspect-square overflow-hidden rounded-md border-action-500  bg-primary-950 text-center  shadow-sm transition-opacity  ${disabled ? "pointer-events-none opacity-20" : "opacity-90 hover:border-[0.1px] hover:opacity-100"}`}
    >
      <p className="text-base text-action-500">
        {props.progressData ? props.progressData.weight + " kg" : "-"}
      </p>
      <p className="absolute bottom-0 right-1 text-xs opacity-80">
        {props.date.getDate()}
      </p>
    </motion.button>
  );
}

export default DayCard;
