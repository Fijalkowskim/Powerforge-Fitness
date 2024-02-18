import React, { useState } from "react";
import { Workouts } from "../exampleData/Workouts";
import WorkoutCard from "../components/workouts/WorkoutCard";
import { WorkoutData } from "../models/WorkoutData";
import WorkoutDetails from "../components/workouts/WorkoutDetails";
import { AnimatePresence } from "framer-motion";
import { useSettingsContext } from "../context/SettingsContext";

function WorkoutsPage() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutData>();
  const { setDisableScroll } = useSettingsContext();
  return (
    <div
      className={`relative mb-10 flex min-h-screen flex-col items-center justify-start gap-4  pt-20 uppercase text-primary-50 
      `}
    >
      <h1
        className="font-accent text-6xl  tracking-wide drop-shadow-lg"
        style={{ textShadow: "1px 1px black" }}
      >
        Our workouts
      </h1>
      <div className="container flex flex-wrap items-center justify-center gap-8">
        {Workouts.map((workout, idx) => (
          <WorkoutCard
            key={idx}
            workout={workout}
            onClick={(workout: WorkoutData) => {
              setSelectedWorkout(workout);
              setDisableScroll(true);
            }}
          />
        ))}
      </div>
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
