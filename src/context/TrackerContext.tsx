import { ReactNode, createContext, useContext, useState } from "react";
import { ProgressData } from "../models/ProgressData";
import { compareDates } from "../helpers/helpers";

interface TrackerContextProviderProps {
  children: ReactNode;
}
interface TrackerContextProps {
  progressData: ProgressData[];
  AddProgress: (newData: ProgressData) => void;
  GetWeight: (date: Date) => number | undefined;
}
const TraclerContext = createContext({} as TrackerContextProps);

export function useTrackerContext() {
  return useContext(TraclerContext);
}

export function TrackerContextProvider({
  children,
}: TrackerContextProviderProps) {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const AddProgress = (newData: ProgressData) => {
    const oldData = progressData.find((p) =>
      compareDates(p.date, newData.date),
    );
    if (oldData) {
      setProgressData((prev) =>
        prev.map((p) => (p.date === newData.date ? newData : p)),
      );
    } else {
      const newProgressData = [...progressData, newData];
      newProgressData.sort(
        (a: ProgressData, b: ProgressData) =>
          new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      setProgressData(newProgressData);
    }
  };
  const GetWeight = (date: Date) => {
    const progress = progressData.find((p) => compareDates(p.date, date));
    return progress ? progress.weight : undefined;
  };
  return (
    <TraclerContext.Provider value={{ progressData, AddProgress, GetWeight }}>
      {children}
    </TraclerContext.Provider>
  );
}
