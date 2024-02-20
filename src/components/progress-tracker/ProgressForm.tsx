import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTrackerContext } from "../../context/TrackerContext";
import CustomButton from "../general/CustomButton";
import { useSettingsContext } from "../../context/SettingsContext";

function ProgressForm() {
  const [weight, setWeight] = useState("");
  const { setPickedDate, AddProgress, pickedDate } = useTrackerContext();
  const { setDisableScroll } = useSettingsContext();
  useEffect(() => {
    setDisableScroll(true);
  }, [setDisableScroll]);

  if (pickedDate === undefined) return <div></div>;

  const dateString = `${pickedDate?.getDate().toString().padStart(2, "0")}.${(pickedDate?.getMonth() + 1).toString().padStart(2, "0")}.${pickedDate?.getFullYear().toString().slice(-2)}`;

  const onExit = () => {
    setDisableScroll(false);
    setPickedDate(undefined);
  };

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
      <form
        className="relative z-10 flex min-h-32 min-w-96 flex-col items-center justify-center gap-1 border-2 border-action-500 bg-primary-950 p-4 shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          if (weight === "") return;
          try {
            AddProgress({ date: pickedDate, weight: Number(weight) });
            onExit();
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <label className="text-xl">Enter your weight ({dateString}) </label>
        <input
          placeholder="Weight (kg)"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="mb-3 px-3 py-2 text-primary-950 placeholder-primary-950/80"
        />
        <CustomButton type="submit">confirm</CustomButton>
        <button
          onClick={onExit}
          type="button"
          className="absolute right-3 top-3 z-10 origin-center rounded-md bg-action-500 px-2 font-primary text-xl font-bold text-primary-950 transition-opacity hover:opacity-80"
        >
          X
        </button>
      </form>
    </motion.div>
  );
}

export default ProgressForm;
