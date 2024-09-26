"use client";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import { useSelector } from "react-redux";

// Initialize the exporting module
if (typeof Highcharts === "object") {
  exportingInit(Highcharts);
}

const CompleteTestGraph = () => {
  const { tests } = useSelector((store) => store.test);

  //   filter completed tests
  const completedTests = tests.filter((test) => test.fromapp === "0");

  // Calculate counts for each phase
  const phaseOneCount = completedTests.filter((test) => test.phase === "Phase 1").length;
  const phaseTwoCount = completedTests.filter((test) => test.phase === "Phase 2").length;
  const phaseThreeCount = completedTests.filter(
    (test) => test.phase === "Phase 3"
  ).length;
  const phaseFourCount = completedTests.filter(
    (test) => test.phase === "Phase 4"
  ).length;
  const phaseFiveCount = completedTests.filter(
    (test) => test.phase === "Phase 5"
  ).length;

  const [options, setOptions] = useState({
    chart: {
      type: "column", // Using column for bar chart
    },
    title: {
      text: "Complete Tests by Phase",
    },
    xAxis: {
      categories: ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"], // Phases on the x-axis
      title: {
        text: "Phases",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count of Tests",
      },
    },
    legend: {
      enabled: false, // Disable legend if not needed
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Complete Tests",
        data: [
          { y: phaseOneCount, color: "red" }, // Red
          { y: phaseTwoCount, color: "green" }, // green
          { y: phaseThreeCount, color: "blue" }, // blue
          { y: phaseFourCount, color: "orange" }, // Orange
          { y: phaseFiveCount, color: "#981B2D" }, // Purple
        ], // Data for each phase, with colors
      },
    ],
  });

  return (
    <>
      <div className="">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default CompleteTestGraph;
