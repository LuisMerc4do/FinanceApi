import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  return (
    <div className=" rounded-sm border border-stroke bg-white px-5 pb-1 pt-3.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
      <div className="mb-5.5 flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-xl font-bold text-black dark:text-white">
          Total Investment
        </h4>
        <div className="relative z-20 inline-block rounded">
          <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
            <option value="" className="dark:bg-boxdark">
              Last 7 days
            </option>
            <option value="" className="dark:bg-boxdark">
              Last 15 days
            </option>
          </select>
          <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                fill="#64748B"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-6">
        <div>
          <p className="mb-1.5 text-sm font-medium">Invested Value</p>
          <div className="flex items-center gap-2.5">
            <p className="font-medium text-black dark:text-white">$1,279.95</p>
            <p className="flex items-center gap-1 font-medium text-meta-3">
              1,22%
              <svg
                className="fill-current"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z"
                  fill=""
                />
              </svg>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-1.5 text-sm font-medium">Total Returns</p>
          <div className="flex items-center gap-2.5">
            <p className="font-medium text-black dark:text-white">$22,543.87</p>
            <p className="flex items-center gap-1 font-medium text-meta-3">
              10.14%
              <svg
                className="fill-current"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z"
                  fill=""
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          id="chartOne"
          className="col-span-1  dark:border-strokedark dark:text-white dark:bg-white sm:px-2.5 xl:col-span-7"
        >
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
