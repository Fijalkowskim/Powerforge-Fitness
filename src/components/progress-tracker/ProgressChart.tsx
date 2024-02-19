import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useTrackerContext } from "../../context/TrackerContext";

function ProgressChart() {
  ChartJS.register(CategoryScale);
  const { progressData } = useTrackerContext();
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const newLabels: string[] = [];
    const newData: number[] = [];
    progressData.forEach((d) => {
      newLabels.push(d.date.toDateString());
      newData.push(d.weight);
    });
    setLabels(newLabels);
    setData(newData);
  }, [progressData]);
  return (
    <div className="aspect-square w-[500px]">
      <Chart
        type={"line"}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Last 30 days weight",
              data: data,
            },
          ],
        }}
      />
    </div>
  );
}

export default ProgressChart;
