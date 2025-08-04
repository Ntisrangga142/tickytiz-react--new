import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashboardMain() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const dataValues = [200, 600, 450, 300, 400, 250];

  // Opsi chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  // Dataset dengan gradient pakai callback
  const getData = () => ({
    labels,
    datasets: [
      {
        label: "Sales",
        data: dataValues,
        fill: true,
        backgroundColor: (context) => {
  const { ctx, chartArea } = context.chart;
  if (!chartArea) return null; // chart belum selesai render
  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
  gradient.addColorStop(0, "rgba(59, 130, 246, 1)");
  gradient.addColorStop(1, "rgba(59, 130, 246, 1)");
  return gradient;
},
        borderColor: "#3B82F6",
        borderWidth: 2,
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  });

  return (
    <>
      <main class="bg-[#A0A3BD33] py-[50px] px-[75px] flex flex-col gap-[30px] justify-center">
        <div class="p-6 bg-white rounded-[20px]">
          <h2 class="text-xl font-semibold mb-4">Sales Chart</h2>

          <div class="flex flex-wrap items-center gap-4 mb-6 width">
            <select
              id="movies-name"
              class="px-4 py-2 border rounded-md text-gray-600"
            >
              <option>Movies Name</option>
              <option>Avenger</option>
              <option>Top Gun</option>
              <option>Conjuring</option>
            </select>

            <select id="time" class="px-4 py-2 border rounded-md text-gray-600">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>

            <button
              id="filterBtn-1"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Filter
            </button>
          </div>

          <Line data={getData()} options={options} />
        </div>

        <div class="p-6 bg-white rounded-[20px]">
          <h2 class="text-xl font-semibold mb-4">Ticket Sales</h2>

          <div class="flex flex-wrap items-center gap-4 mb-6 width">
            <select
              id="category"
              class="px-4 py-2 border rounded-md text-gray-600"
            >
              <option>Category</option>
              <option>Drama</option>
              <option>Action</option>
              <option>Horor</option>
            </select>

            <select
              id="location"
              class="px-4 py-2 border rounded-md text-gray-600"
            >
              <option>Location</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Purwokerto</option>
            </select>

            <button
              id="filterBtn-2"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Filter
            </button>
          </div>

          <Line data={getData()} options={options} />
        </div>
      </main>
    </>
  );
}

export default DashboardMain;
