import { useContext, useRef } from "react";
import { Line } from "react-chartjs-2";
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
import "./History.css";
import { ContextAPI } from "../Data/DataContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function History() {
  const { patient } = useContext(ContextAPI);
  const months = useRef([]);
  const systolic = useRef([]);
  const diastolic = useRef([]);

  if (!patient || !patient.diagnosis_history) return <>Loading...</>;

  months.current = patient.diagnosis_history
    .map((obj) => obj.month.substring(0, 3) + ", " + obj.year)
    .slice(0, 6)
    .reverse();

  systolic.current = patient.diagnosis_history
    .map((obj) => obj.blood_pressure.systolic.value)
    .slice(0, 6)
    .reverse();

  diastolic.current = patient.diagnosis_history
    .map((obj) => obj.blood_pressure.diastolic.value)
    .slice(0, 6)
    .reverse();

  const ChartData = {
    labels: months.current,
    datasets: [
      {
        label: "Systolic",
        data: systolic.current,
        borderColor: "#C26EB4",
        borderWidth: 2,
        tension: 0.45,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#FFF",
        pointBorderWidth: 1,
        pointRadius: 7,
        pointHoverRadius: 10,
      },
      {
        label: "Diastolic",
        data: diastolic.current,
        borderColor: "#7E6CAB",
        borderWidth: 2,
        tension: 0.45,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#FFF",
        pointBorderWidth: 1,
        pointRadius: 7,
        pointHoverRadius: 10,
      },
    ],
  };

  const options = {
    devicePixelRatio: 4,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    callbacks: {
      label: function (context) {
        const datasetLabel = context.dataset.label || "";
        const value = context.raw;
        return `${datasetLabel}: ${value} mmHg`;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
            weight: 500,
          },
        },
      },
      y: {
        grid: {
          color: "#CBC8D4",
        },
        ticks: {
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
            weight: 500,
          },
        },
      },
    },
  };

  return (
    <div className="history-main">
      <p className="heading-history">Diagnosis History</p>
      <div className="chart">
        <div className="history-left">
          <div className="history-title">
            <p className="blood-p">Blood Pressure</p>
            <p className="last-6">
              Last 6 Months <img src=" expand.svg" alt="" />
            </p>
          </div>
          <div className="line-chart">
            <Line data={ChartData} options={options} />
          </div>
        </div>

        <div className="history-right">
          <div className="systolic">
            <div className="sys-head">
              <div className="pink-dot"></div>
              <p className="sys-h">Systolic</p>
            </div>
            <p className="s-val">
              {patient.diagnosis_history[0].blood_pressure.systolic.value}
            </p>
            <p className="s-val-text">
              {patient.diagnosis_history[0].blood_pressure.systolic.levels.includes(
                "Normal"
              ) ? (
                ""
              ) : patient.diagnosis_history[0].blood_pressure.systolic.levels.includes(
                  "Lower"
                ) ? (
                <img className="arrow" src=" ArrowDown.svg" />
              ) : (
                <img className="arrow" src=" ArrowUp.svg" />
              )}
              <span>
                {patient.diagnosis_history[0].blood_pressure.systolic.levels}
              </span>
            </p>
          </div>
          <div className="diastolic">
            <div className="sys-head">
              <div className="purple-dot"></div>
              <p className="sys-h">Diastolic</p>
            </div>
            <p className="s-val">
              {patient.diagnosis_history[0].blood_pressure.diastolic.value}
            </p>
            <p className="s-val-text">
              {patient.diagnosis_history[0].blood_pressure.diastolic.levels.includes(
                "Normal"
              ) ? (
                ""
              ) : patient.diagnosis_history[0].blood_pressure.diastolic.levels.includes(
                  "Lower"
                ) ? (
                <img className="arrow" src=" ArrowDown.svg" />
              ) : (
                <img className="arrow" src=" ArrowUp.svg" />
              )}
              <span>
                {patient.diagnosis_history[0].blood_pressure.diastolic.levels}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="health-info">
        <div className="w resp">
          <img src=" respiratory_rate.svg" alt="" className="w-logo" />
          <p className="type">Respiratory Rate</p>
          <p className="type-data">
            {patient.diagnosis_history[0].respiratory_rate.value} bpm
          </p>
          <p className="type-data-info">
            {patient.diagnosis_history[0].respiratory_rate.levels.includes(
              "Normal"
            ) ? (
              ""
            ) : patient.diagnosis_history[0].respiratory_rate.levels.includes(
                "Lower"
              ) ? (
              <img className="arrow" src=" ArrowDown.svg" />
            ) : (
              <img className="arrow" src=" ArrowUp.svg" />
            )}
            <span>{patient.diagnosis_history[0].respiratory_rate.levels}</span>
          </p>
        </div>
        <div className="w temp">
          <img src=" temperature.svg" alt="" className="w-logo" />
          <p className="type">Temperature</p>
          <p className="type-data">
            {patient.diagnosis_history[0].temperature.value}°F
          </p>
          <p className="type-data-info">
            {patient.diagnosis_history[0].temperature.levels.includes(
              "Normal"
            ) ? (
              ""
            ) : patient.diagnosis_history[0].temperature.levels.includes(
                "Lower"
              ) ? (
              <img className="arrow" src=" ArrowDown.svg" />
            ) : (
              <img className="arrow" src=" ArrowUp.svg" />
            )}
            <span>{patient.diagnosis_history[0].temperature.levels}</span>
          </p>
        </div>
        <div className="w heart">
          <img src="HeartBPM.svg" alt="" className="w-logo" />
          <p className="type">Heart Rate</p>
          <p className="type-data">
            {patient.diagnosis_history[0].heart_rate.value} bpm
          </p>
          <p className="type-data-info">
            {patient.diagnosis_history[0].heart_rate.levels.includes(
              "Normal"
            ) ? (
              ""
            ) : patient.diagnosis_history[0].heart_rate.levels.includes(
                "Lower"
              ) ? (
              <img className="arrow" src=" ArrowDown.svg" />
            ) : (
              <img className="arrow" src=" ArrowUp.svg" />
            )}
            <span>{patient.diagnosis_history[0].heart_rate.levels}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
