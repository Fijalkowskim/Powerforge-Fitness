import React from "react";
import { BMIIndicator } from "./BMICalculator";
interface Props {
  bmiData: BMIIndicator;
  bmiPreviousRange?: number;
  last?: boolean;
}
function BMIIndicatorRange({ bmiData, bmiPreviousRange, last }: Props) {
  return (
    <p className="text-sm">
      <span className="text-base text-action-400">
        {bmiPreviousRange !== undefined
          ? last === true
            ? `${bmiPreviousRange} <`
            : `${bmiPreviousRange} - ${bmiData.rangeTo}`
          : `< ${bmiData.rangeTo}`}
      </span>{" "}
      - {bmiData.status}
    </p>
  );
}

export default BMIIndicatorRange;
