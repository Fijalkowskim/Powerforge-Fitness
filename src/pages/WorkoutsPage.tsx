import React, { useState } from "react";
import { Workouts } from "../exampleData/Workouts";
import WorkoutCard from "../components/workouts/WorkoutCard";
import { WorkoutData } from "../models/WorkoutData";
import WorkoutDetails from "../components/workouts/WorkoutDetails";
import { AnimatePresence } from "framer-motion";
import { useSettingsContext } from "../context/SettingsContext";
import { motion } from "framer-motion";

function WorkoutsPage() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutData>();
  const { setDisableScroll } = useSettingsContext();
  return (
    <div
      className={`relative mb-10 flex min-h-screen flex-col items-center justify-start gap-4  pt-20 uppercase text-primary-50 
      `}
    >
      <h1
        className="font-accent text-6xl  tracking-wide text-action-500 drop-shadow-lg"
        style={{ textShadow: "1px 1px black" }}
      >
        Our workouts
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container flex flex-wrap items-center justify-center gap-8"
        transition={{ staggerChildren: 2, delayChildren: 3 }}
      >
        {Workouts.map((workout, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3 + 0.1 * idx,
              type: "spring",
              mass: 0.9,
              stiffness: 118,
              damping: 13,
            }}
          >
            <WorkoutCard
              workout={workout}
              onClick={(workout: WorkoutData) => {
                setSelectedWorkout(workout);
                setDisableScroll(true);
              }}
            />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedWorkout && (
          <WorkoutDetails
            workout={selectedWorkout}
            onExit={() => {
              setSelectedWorkout(undefined);
              setDisableScroll(false);
            }}
            key={selectedWorkout.name}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default WorkoutsPage;
