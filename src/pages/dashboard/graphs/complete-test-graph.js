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

  // Filter completed tests
  const completedTests = tests.filter((test) => test.fromapp === "0");

  // Calculate counts for each phase
  const phaseOneCount = completedTests.filter((test) => test.phase === "Phase 1").length;
  const phaseTwoCount = completedTests.filter((test) => test.phase === "Phase 2").length;
  const phaseThreeCount = completedTests.filter((test) => test.phase === "Phase 3").length;
  const phaseFourCount = completedTests.filter((test) => test.phase === "Phase 4").length;
  const phaseFiveCount = completedTests.filter((test) => test.phase === "Phase 5").length;

  // Create an array of phase data
  const phaseData = [
    { name: "Phase 1", y: phaseOneCount, color: "red" },
    { name: "Phase 2", y: phaseTwoCount, color: "green" },
    { name: "Phase 3", y: phaseThreeCount, color: "blue" },
    { name: "Phase 4", y: phaseFourCount, color: "orange" },
    { name: "Phase 5", y: phaseFiveCount, color: "#981B2D" }
  ];

  // Sort the array in descending order by the count (y value)
  phaseData.sort((a, b) => b.y - a.y);

  // Extract the sorted phase names and counts for the chart
  const sortedCategories = phaseData.map((phase) => phase.name);
  const sortedData = phaseData.map((phase) => ({ y: phase.y, color: phase.color }));

  const [options, setOptions] = useState({
    chart: {
      type: "column", // Using column for bar chart
    },
    title: {
      text: "Complete Tests by Phase",
    },
    xAxis: {
      categories: sortedCategories, // Sorted phases on the x-axis
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
        data: sortedData, // Sorted data for each phase, with colors
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
