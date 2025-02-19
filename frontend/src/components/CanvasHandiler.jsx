import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; 

const MyChart = ({ data, options }) => {
  const chartRef = useRef(null); 
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "line", 
      data: data,
      options: options,
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]); 

  return <canvas ref={chartRef} />;
};

export default MyChart;
