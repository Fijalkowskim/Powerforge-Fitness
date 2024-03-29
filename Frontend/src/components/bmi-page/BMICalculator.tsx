import React, { useState } from "react";
import CustomButton from "../general/CustomButton";
import BMIIndicatorRange from "./BMIIndicatorRange";
import { motion } from "framer-motion";
export interface BMIIndicator {
  rangeTo: number;
  status: string;
  description: string;
}
const BMIIndicatorRanges: BMIIndicator[] = [
  {
    rangeTo: 16.5,
    status: "Critical Underweight",
    description:
      "Your weight is at a critically low level and poses a serious health risk. It is important to consult with a healthcare professional immediately for personalized guidance.",
  },
  {
    rangeTo: 18.5,
    status: "Underweight",
    description:
      "Your weight is below the healthy range, which may indicate insufficient nutrition. Consider adopting a well-balanced diet to improve your overall well-being.",
  },
  {
    rangeTo: 25,
    status: "Normal Weight",
    description:
      "Congratulations! Your weight falls within the normal range, indicating a healthy balance between your height and weight. Keep up the good work with a healthy lifestyle.",
  },
  {
    rangeTo: 30,
    status: "Overweight",
    description:
      "Your weight is above the recommended range, which may increase the risk of certain health conditions. Consider incorporating regular exercise and a balanced diet to achieve a healthier weight.",
  },
  {
    rangeTo: Infinity,
    status: "Obese",
    description:
      "Your weight is at a level that poses significant health risks. It is crucial to seek professional advice and make lifestyle changes to address the potential health consequences associated with obesity.",
  },
];
function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number>();
  const [bmiIndicator, setBmiIndicator] = useState<BMIIndicator>();

  const calculateBmi = (weight: number, height: number): number => {
    return (weight / height / height) * 10000;
  };
  const calculateBmiIndicator = (
    bmi: number,
    bmiIndicators: BMIIndicator[],
  ): BMIIndicator => {
    const foundIndicator = bmiIndicators.find((ind) => bmi < ind.rangeTo);
    return foundIndicator
      ? foundIndicator
      : bmiIndicators[bmiIndicators.length - 1];
  };

  return (
    <motion.div className="container z-10 flex h-full flex-col items-center justify-center gap-1 overflow-y-scroll border-primary-50 bg-primary-950/80 p-4 text-center uppercase text-primary-50 sm:mt-0 sm:h-auto sm:border-4 lg:overflow-auto">
      <h1
        className={`${bmi && bmiIndicator && "mt-20"} font-accent text-5xl sm:mt-0 sm:text-6xl`}
      >
        Calculate your BMI
      </h1>
      <p className="text-sm opacity-90 sm:max-w-[40%] sm:text-base">
        The body mass index (BMI) is a measure that uses your height and weight
        to work out if your weight is healthy.
      </p>
      <form
        id="bmi-form"
        className="mb-3 flex flex-col items-center justify-center gap-4 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          if (weight === "" || height === "") return;
          let weightNumber = 0;
          let heightNumber = 0;
          try {
            weightNumber = Number(weight);
            heightNumber = Number(height);
          } catch (err) {
            console.log(err);
            return;
          }
          const newBmi = calculateBmi(weightNumber, heightNumber);
          setBmi(newBmi);
          setBmiIndicator(calculateBmiIndicator(newBmi, BMIIndicatorRanges));
        }}
      >
        <input
          placeholder="Weight (kg)"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="px-3 py-2 text-primary-950 placeholder-primary-950/80"
        />
        <input
          placeholder="Height (cm)"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="px-3 py-2 text-primary-950 placeholder-primary-950/80"
        />
      </form>
      <CustomButton
        variant={"darker"}
        type="submit"
        form="bmi-form"
        className="rounded-none px-10"
      >
        Calculate
      </CustomButton>
      {bmi && bmiIndicator && (
        <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-col lg:max-w-[80%]">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="mb-3 mt-2 h-[0.1px] w-full bg-primary-50" />
            <span className="font-accent text-4xl lg:text-5xl">
              Your bmi:{" "}
              <span className="text-action-500">{bmi.toFixed(1)}</span>
            </span>
            <p className="text-lg font-light tracking-wide text-action-500">
              {bmiIndicator.status}
            </p>
          </div>
          <div className=" h-[0.1px] w-full bg-primary-50 sm:hidden" />
          <p className="font-light sm:max-w-[50%]">
            {bmiIndicator.description}
          </p>
          <div className=" h-[0.1px] w-full bg-primary-50 sm:hidden" />
          <div className=" flex flex-shrink-0 flex-col items-start justify-center">
            <h1>BMI range indication</h1>
            {BMIIndicatorRanges.map((r, idx) => (
              <BMIIndicatorRange
                key={idx}
                bmiData={r}
                bmiPreviousRange={
                  idx > 0 ? BMIIndicatorRanges[idx - 1].rangeTo : undefined
                }
                last={idx === BMIIndicatorRanges.length - 1}
              />
            ))}
          </div>
          <div className="mb-3 mt-2 hidden h-[0.1px] w-full bg-primary-50 sm:block" />
        </div>
      )}
    </motion.div>
  );
}

export default BMICalculator;
