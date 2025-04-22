import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

const data = {
  labels: ["Revenue Won", "Revenue Pending", "Revenue Lost"],
  datasets: [
    {
      data: [18000, 12000, 8000],
      backgroundColor: ["#A78BFA", "#6EE7B7", "#3F3F46"],
      borderRadius: 5,
      barThickness: 20,
    },
  ],
};

export default function RevenueBarChart() {
  return <Bar options={options} data={data} />;
}
