import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Open", "Accepted", "Rejected", "Expired"],
  datasets: [
    {
      label: "Quotes",
      data: [20000, 15000, 13000, 5000],
      backgroundColor: ["#A78BFA", "#6EE7B7", "#3F3F46", "#93C5FD"],
      borderRadius: 5,
      barThickness: 40,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

export default function QuotesBarChart() {
  return <Bar data={data} options={options} />;
}
