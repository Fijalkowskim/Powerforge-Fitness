import { ReactNode, createContext, useContext, useState } from "react";
import { ProgressData } from "../models/ProgressData";
import { compareDates } from "../helpers/helpers";
import api from "../api/api";
import { IoMdReturnLeft } from "react-icons/io";
interface TrackerContextProviderProps {
  children: ReactNode;
}
interface TrackerContextProps {
  progressData: ProgressData[];
  AddProgress: (newData: ProgressData) => void;
  DeleteProgress: (progressData: ProgressData | undefined) => void;
  GetProgressByDate: (date: Date) => ProgressData | undefined;
  pickedDate: Date | undefined;
  setPickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  EditingProgressData: (date: Date, oldProgressData?: ProgressData) => void;
  LoadProgresses: () => void;
  oldProgressData: ProgressData | undefined;
  setOldProgressData: React.Dispatch<
    React.SetStateAction<ProgressData | undefined>
  >;
}
const TraclerContext = createContext({} as TrackerContextProps);

export function useTrackerContext() {
  return useContext(TraclerContext);
}

export function TrackerContextProvider({
  children,
}: TrackerContextProviderProps) {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [pickedDate, setPickedDate] = useState<Date | undefined>(undefined);
  const [oldProgressData, setOldProgressData] = useState<
    ProgressData | undefined
  >(undefined);

  const LoadProgresses = () => {
    const progresses: ProgressData[] = [];
    api
      .get("/progress")
      .then((res) => {
        res.data.data.forEach(
          (p: { date: Date; weight: number; _id: string }) => {
            progresses.push({
              date: new Date(p.date),
              weight: p.weight,
              id: p._id,
            });
          },
        );
      })
      .catch((err) => {
        console.log(err);
      });

    setProgressData(progresses);
  };

  const AddProgress = (newData: ProgressData) => {
    const oldData = progressData.find((p) =>
      compareDates(p.date, newData.date),
    );
    const body = { date: newData.date, weight: newData.weight };
    if (oldData) {
      api
        .put(`/progress/${oldData.id}`, body)
        .then((res) => {
          const resData: ProgressData = {
            date: new Date(res.data.data.date),
            weight: res.data.data.weight,
            id: res.data.data._id,
          };
          setProgressData((prev) =>
            prev.map((p) => (compareDates(p.date, newData.date) ? resData : p)),
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .post(`/progress`, body)
        .then((res) => {
          const resData: ProgressData = {
            date: new Date(res.data.date),
            weight: res.data.weight,
            id: res.data._id,
          };
          const newProgressData = [...progressData, resData];
          newProgressData.sort(
            (a: ProgressData, b: ProgressData) =>
              new Date(a.date).getTime() - new Date(b.date).getTime(),
          );
          setProgressData(newProgressData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const DeleteProgress = (progressData: ProgressData | undefined) => {
    if (!progressData) {
      return;
    }
    api
      .delete(`/progress/${progressData.id}`)
      .then((res) => {
        setProgressData((prev) => prev.filter((p) => p.id !== progressData.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const GetProgressByDate = (date: Date) => {
    const progress = progressData.find((p) => compareDates(p.date, date));
    return progress;
  };
  const EditingProgressData = (date: Date, oldProgressData?: ProgressData) => {
    setPickedDate(date);
    setOldProgressData(oldProgressData);
  };
  return (
    <TraclerContext.Provider
      value={{
        progressData,
        AddProgress,
        DeleteProgress,
        GetProgressByDate,
        pickedDate,
        setPickedDate,
        EditingProgressData,
        LoadProgresses,
        oldProgressData,
        setOldProgressData,
      }}
    >
      {children}
    </TraclerContext.Provider>
  );
}
