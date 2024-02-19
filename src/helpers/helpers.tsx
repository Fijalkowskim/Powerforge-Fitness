import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};
