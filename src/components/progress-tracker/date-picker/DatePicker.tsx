import React, { useState } from "react";
import { daysInMonth } from "../../../helpers/helpers";
import DayCard from "./DayCard";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useTrackerContext } from "../../../context/TrackerContext";
interface MonthData {
  month: number;
  year: number;
}
const monthNames = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function DatePicker() {
  const currentDate = new Date();
  const [monthData, setMonthData] = useState<MonthData>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const { GetWeight } = useTrackerContext();
  return (
    <div className="flex w-full max-w-xl flex-col items-center justify-center gap-2 bg-primary-950/50 p-1 text-xl  normal-case text-primary-50 shadow-md sm:p-3 sm:text-2xl lg:w-fit lg:max-w-full">
      <div className="flex w-full items-center justify-between">
        <motion.button
          whileHover={{ x: -1 }}
          onClick={() => {
            setMonthData((prev) =>
              prev.month === 0
                ? { month: 11, year: prev.year - 1 }
                : { month: prev.month - 1, year: prev.year },
            );
          }}
        >
          <FaAngleDoubleLeft />
        </motion.button>
        <h1 className="text-center">
          {monthNames[monthData.month]} {monthData.year}
        </h1>
        <motion.button
          className={`${monthData.year >= currentDate.getFullYear() && monthData.month >= currentDate.getMonth() && "pointer-events-none opacity-0"}`}
          whileHover={{ x: 1 }}
          onClick={() => {
            setMonthData((prev) =>
              prev.month === 11
                ? { month: 0, year: prev.year + 1 }
                : { month: prev.month + 1, year: prev.year },
            );
          }}
        >
          <FaAngleDoubleRight />
        </motion.button>
      </div>
      <div className="grid w-full grid-cols-7 grid-rows-5 gap-1 sm:gap-2 lg:w-[450px]">
        <AnimatePresence>
          {[...Array(daysInMonth(monthData.month + 1, monthData.year))].map(
            (_, dayIndex) => {
              const date = new Date(
                monthData.year,
                monthData.month,
                dayIndex + 1,
              );
              return (
                <DayCard
                  key={dayIndex + 1}
                  date={date}
                  weight={GetWeight(date)}
                />
              );
            },
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DatePicker;
