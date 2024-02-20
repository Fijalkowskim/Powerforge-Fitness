import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { CategoryScale, scales } from "chart.js";
import { useTrackerContext } from "../../context/TrackerContext";
import { useMediaQuery } from "react-responsive";

enum ChartType {
  Last30Days,
  Last90Days,
}

function ProgressChart() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  ChartJS.register(CategoryScale);
  const currentDate = new Date();
  const { progressData, GetProgressByDate } = useTrackerContext();
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<(number | undefined)[]>([]);
  const [chartType, setChartType] = useState<ChartType>(ChartType.Last30Days);

  useEffect(() => {
    const newLabels: string[] = [];
    const newData: (number | undefined)[] = [];
    const days = chartType === ChartType.Last30Days ? 30 : 90;
    for (let i = days; i >= 0; i--) {
      const newDate: Date = new Date(currentDate);
      newDate.setDate(currentDate.getDate() - i);
      const year = newDate.getFullYear().toString().slice(-2);
      const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
      const day = newDate.getDate().toString().padStart(2, "0");
      newLabels.push(`${day}.${month}.${year}`);
      const searchedProgress = GetProgressByDate(newDate);
      newData.push(searchedProgress ? searchedProgress.weight : undefined);
    }
    setLabels(newLabels);
    setData(newData);
  }, [progressData, chartType]);
  return (
    <div className="flex w-full flex-col items-center justify-center sm:w-fit">
      <h1 className="text-action-500">Choose chart type</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex items-center justify-center gap-5">
          <label className="flex cursor-pointer flex-col items-center justify-center text-sm opacity-90">
            Last 30 days
            <input
              type="radio"
              name="chartType"
              checked={chartType === ChartType.Last30Days}
              onChange={() => {
                setChartType(ChartType.Last30Days);
              }}
            />
          </label>
          <label className="flex cursor-pointer flex-col items-center justify-center text-sm opacity-90">
            Last 90 days
            <input
              type="radio"
              name="chartType"
              checked={chartType === ChartType.Last90Days}
              onChange={() => {
                setChartType(ChartType.Last90Days);
              }}
            />
          </label>
        </div>
      </form>
      <div className="mt-2 aspect-square w-full sm:w-[500px]">
        <Chart
          type={"line"}
          data={{
            labels: labels,
            datasets: [
              {
                label:
                  chartType === ChartType.Last30Days
                    ? "Last 30 days weight"
                    : "Last 90 days weight",
                data: data,
                borderColor: "#e4bf1b",
                spanGaps: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            aspectRatio: 1,
            responsive: true,
            scales: {
              x: {
                ticks: {
                  color: "white",
                },
              },
              y: {
                ticks: {
                  color: "white",
                },
                title: {
                  display: !isMobile,
                  text: "Weight (kg)",
                  color: "white",
                  font: {
                    size: 15,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProgressChart;
