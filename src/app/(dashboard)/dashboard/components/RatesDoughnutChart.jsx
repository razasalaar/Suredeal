import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Acceptance Rate", "Open Rate", "Rejection Rate", "Expiry Rate"],
  datasets: [
    {
      data: [52.1, 22.8, 13.9, 11.2],
      backgroundColor: ["#6EE7B7", "#93C5FD", "#A1A1AA", "#F9A8D4"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "55%",
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 12,
        padding: 15,
        font: {
          size: 12,
        },
        usePointStyle: true,
      },
    },
  },
  maintainAspectRatio: false,
};

export default function RatesDoughnutChart() {
  return (
    <div className="h-[171px] w-[304px] ">
      <Doughnut data={data} options={options} />
    </div>
  );
}
