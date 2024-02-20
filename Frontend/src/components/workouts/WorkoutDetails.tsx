import React from "react";
import { WorkoutData } from "../../models/WorkoutData";
import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";
interface Props {
  workout: WorkoutData;
  onExit: () => void;
}
function WorkoutDetails({ workout, onExit }: Props) {
  const difficulty =
    workout.difficulty > 5
      ? 5
      : workout.difficulty < 0
        ? 0
        : workout.difficulty;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-w-screen fixed inset-0 z-10 flex min-h-screen items-center justify-center"
    >
      <div
        className="absolute inset-0 h-full w-full bg-black/60"
        onClick={onExit}
      />
      <div className="relative z-10 flex max-h-[80%] w-full flex-col items-start justify-start gap-1 overflow-y-scroll border-2 border-action-500 bg-primary-950 p-3 text-left leading-normal shadow-lg sm:container sm:mt-0 sm:max-h-full sm:w-auto sm:max-w-[60%] sm:overflow-y-auto">
        <h1 className=" font-accent text-2xl text-action-500 sm:text-4xl">
          {workout.name}
        </h1>
        <p className="font-extralight normal-case leading-tight sm:max-w-[80%] sm:text-lg">
          {workout.description}
        </p>
        <div className="-mb-2 mt-2 flex  w-full gap-10 font-light opacity-80">
          <h2>Difficulty:</h2>
          <h2>Time:</h2>
        </div>
        <div className="flex w-full  gap-9 font-light opacity-80">
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
        <div className="mt-4 flex w-full items-center justify-center gap-2 text-center">
          <h2 className="mb-2 text-2xl text-action-300">Exercises</h2>
          <div className="h-[0.1px] w-full bg-action-300" />
        </div>
        <ul className="flex list-inside list-disc flex-col gap-2 text-lg sm:gap-4">
          {workout.exercises.map((ex, idx) => (
            <li key={idx}>
              {ex.name} -{" "}
              <span className="text-base font-thin opacity-80">
                {ex.sets} sets / {ex.reps} reps
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={onExit}
          className="absolute right-3 top-3 z-10 origin-center rounded-md bg-action-500 px-2 font-primary font-bold text-primary-950 transition-opacity hover:opacity-80 sm:px-4 sm:py-1 sm:text-xl"
        >
          X
        </button>
      </div>
    </motion.div>
  );
}

export default WorkoutDetails;
