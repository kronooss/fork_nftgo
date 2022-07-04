import React, { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ReactLoading from "react-loading";

// interface BarChartInterface {
//   chartData: any;
// }

// const BarChart = ({ chartData }: BarChartInterface) => {
const BarChart = ({ chartData }) => {
  // const [options, setOptions] = useState<any>();
  // useEffect(() => {
  //   if (chartData) {
  //     const collectionData = Object.keys(chartData).map((key) => {
  //       const collections =
  //         Math.round((chartData[key] + Number.EPSILON) * 100) / 100;
  //       return [collections];
  //     });
  //
  //     setOptions({
  //       chart: {
  //         renderTo: "container",
  //         type: "column",
  //         height: 70,
  //         width: 90,
  //         backgroundColor: null,
  //       },
  //       plotOptions: {
  //         series: {
  //           shadow: false,
  //         },
  //       },
  //       title: {
  //         text: null,
  //       },
  //       xAxis: {
  //         visible: false,
  //         labels: {
  //           enabled: false,
  //         },
  //       },
  //       yAxis: {
  //         visible: false,
  //         labels: {
  //           enabled: false,
  //         },
  //       },
  //       credits: {
  //         enabled: false,
  //       },
  //       series: [
  //         {
  //           showInLegend: false,
  //           data: collectionData,
  //         },
  //       ],
  //     });
  //   }
  // }, [chartData]);

  // const arrOfNum = chartData.map((str: any) => {
  //   return Number(str);
  // });
  //
  // console.log(chartData);

  const array = ["1", "2", "3"];

  // const arrOfNum: any = [];
  const arrOfNum = [];

  array.forEach((str) => {
    arrOfNum.push(Number(str));
  });

  // console.log(arrOfNum);

  const options = {
    chart: {
      renderTo: "container",
      type: "column",
      height: 70,
      width: 90,
      backgroundColor: null,
    },
    plotOptions: {
      series: {
        shadow: false,
      },
    },
    title: {
      text: null,
    },
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
    series: [
      {
        showInLegend: false,
        data: chartData,
      },
    ],
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

export default BarChart;
