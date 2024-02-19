import React, { useState } from "react";
import { daysInMonth } from "../../../helpers/helpers";
import DayCard from "./DayCard";
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
  const [monthData, setMonthData] = useState<MonthData>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  return (
    <div className="mt-14 flex flex-col items-start justify-center gap-2 bg-primary-950/50 p-3 text-2xl text-primary-50 shadow-md">
      <h1>
        {monthNames[monthData.month]} {monthData.year}
      </h1>
      <div className="grid w-[500px] grid-cols-7 gap-2">
        {[...Array(daysInMonth(monthData.month + 1, monthData.year))].map(
          (_, dayIndex) => (
            <DayCard
              key={dayIndex + 1}
              date={new Date(monthData.year, monthData.month, dayIndex + 1)}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default DatePicker;
