import React from "react";
import DatePicker from "../components/progress-tracker/date-picker/DatePicker";
import ProgressChart from "../components/progress-tracker/ProgressChart";
import { useTrackerContext } from "../context/TrackerContext";
import { AnimatePresence } from "framer-motion";
import ProgressForm from "../components/progress-tracker/ProgressForm";
import { useSettingsContext } from "../context/SettingsContext";
function ProgressPage() {
  const { pickedDate } = useTrackerContext();
  const { apiConnected } = useSettingsContext();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start p-2 text-center uppercase text-primary-50">
      <h1 className="mt-20 font-accent text-5xl text-action-500 sm:text-6xl">
        Track your weight
      </h1>
      <p className="mb-2 mt-1 max-w-4xl text-center">
        Log your weight by selecting dates on the calendar. Dive into insightful
        graphs to gain a deeper understanding of your fitness progress.
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-4 lg:w-fit lg:flex-row">
        <DatePicker />
        <ProgressChart />
      </div>
      {!apiConnected && (
        <div className="mt-8 max-w-md rounded-sm border-2 border-action-500 bg-primary-950 p-1 text-center text-sm opacity-80 shadow-md">
          <h3 className="text-base">Note:</h3>
          <p>
            This is the demo website version. Backend service is not available
            so changes won't be saved between sessions.
          </p>
        </div>
      )}
      <AnimatePresence>{pickedDate && <ProgressForm />}</AnimatePresence>
    </div>
  );
}

export default ProgressPage;
