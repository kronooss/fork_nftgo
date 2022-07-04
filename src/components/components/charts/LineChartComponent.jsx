import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import ReactLoading from "react-loading";

const LineChart = ({ chartData }) => {
  const options = {
    chart: {
      renderTo: "container",
      type: "line",
      height: 70,
      backgroundColor: null,
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
      },
    },
    title: {
      text: null,
    },
    series: [
      {
        showInLegend: false,
        data: chartData,
      },
    ],
    xAxis: {
      visible: false,
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      visible: false,
      labels: {
        enabled: false,
      },
    },
    credits: {
      enabled: false,
    },
  };

  if (!chartData) {
    return (
      <ReactLoading
        type={"spinningBubbles"}
        color={"#fff"}
        height={70}
        width={70}
      />
    );
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
