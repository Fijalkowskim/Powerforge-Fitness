import React from "react";
import { WorkoutData } from "../../models/WorkoutData";
import { FaDotCircle } from "react-icons/fa";
import { motion } from "framer-motion";
interface Props {
  workout: WorkoutData;
}
function WorkoutCard({ workout }: Props) {
  const difficulty =
    workout.difficulty > 5
      ? 5
      : workout.difficulty < 0
        ? 0
        : workout.difficulty;
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 20, mass: 1 },
      }}
      whileTap={{ scale: 1.01 }}
      className="group relative flex aspect-square w-96 flex-shrink-0 cursor-pointer flex-col items-start justify-end  border-2 border-primary-950/30 p-2 shadow-lg"
    >
      <img
        src={workout.image}
        alt="Workout"
        className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-75 transition-opacity group-hover:opacity-60" />
      <h1 className="font-accent text-3xl font-light text-action-500">
        {workout.name}
      </h1>
      <div className="flex w-full justify-between">
        <h2>Difficulty:</h2>
        <h2>Time:</h2>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-start gap-1 text-xs">
          {[...Array(difficulty)].map((d) => (
            <FaDotCircle />
          ))}
          {[...Array(5 - difficulty)].map((d) => (
            <FaDotCircle className="opacity-30" />
          ))}
        </div>
        <p className="text-sm">~{workout.time}min</p>
      </div>
    </motion.button>
  );
}

export default WorkoutCard;
