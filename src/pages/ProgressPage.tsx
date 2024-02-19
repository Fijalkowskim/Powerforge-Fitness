import React from "react";
import DatePicker from "../components/progress-tracker/date-picker/DatePicker";
import ProgressChart from "../components/progress-tracker/ProgressChart";
function ProgressPage() {
  return (
    <div className=" flex min-h-screen flex-col items-center justify-start uppercase text-primary-50">
      <h1 className="mt-20 font-accent text-6xl text-action-500">
        Track your weight
      </h1>
      <p className="mb-5 max-w-4xl text-center">
        Log your weight by selecting dates on the calendar. Dive into insightful
        graphs to gain a deeper understanding of your fitness progress.
      </p>
      <div className="flex items-center justify-center gap-4">
        <DatePicker />
        <ProgressChart />
      </div>
    </div>
  );
}

export default ProgressPage;
