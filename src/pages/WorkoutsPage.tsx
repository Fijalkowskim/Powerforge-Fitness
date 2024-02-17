import React from "react";
import { Workouts } from "../exampleData/Workouts";
import WorkoutCard from "../components/workouts/WorkoutCard";

function WorkoutsPage() {
  return (
    <div className="mb-10 flex min-h-screen flex-col items-center justify-start gap-4 pt-20 uppercase text-primary-50">
      <h1
        className="font-accent text-6xl  tracking-wide drop-shadow-lg"
        style={{ textShadow: "1px 1px black" }}
      >
        Our workouts
      </h1>
      <div className="container flex flex-wrap items-center justify-center gap-8">
        {Workouts.map((workout, idx) => (
          <WorkoutCard key={idx} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default WorkoutsPage;
