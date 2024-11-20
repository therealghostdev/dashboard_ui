import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import menu_icon from "../../assets/Icon1.svg";
import revenue_icon from "../../assets/Icon2.svg";
import customer_icon from "../../assets/Icon3.svg";
import order_icon from "../../assets/Bag1.svg";
import View_total from "../reusables/view_total";
import more_icon from "../../assets/more.svg";
import CircularProgress from "../reusables/pie_char";
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
import CustomerMap from "../reusables/map";
import CustomerList from "../reusables/customers_list";
import "leaflet/dist/leaflet.css";
import { customerData } from "../reusables/variables";
import view_icon from "../../assets/carbon_view-filled.svg";
import download_icon from "../../assets/bx_bx-export.svg";
import delete_icon from "../../assets/feather_trash-2.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Main() {
  const [count, setCount] = React.useState(0);

  const [dailyPercentage, setDailyPercentage] = React.useState(0);
  const [weeklyPercentage, setWeeklyPercentage] = React.useState(0);
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);
  const [customers] = React.useState(customerData);
  const [view_revenue_pop, setView_revenue_pop] = React.useState(false);
  const revenue_pop_ref = React.useRef(null);

  const handle_revenue_pop_btn_click = () => {
    setView_revenue_pop(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (revenue_pop_ref && !revenue_pop_ref.current.contains(e.target)) {
        setView_revenue_pop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    const dailyTimer = setInterval(() => {
      setDailyPercentage((prev) => {
        if (prev >= 18) {
          clearInterval(dailyTimer);
          return 18;
        }
        return prev + 1;
      });
    }, 30);

    const weeklyTimer = setInterval(() => {
      setWeeklyPercentage((prev) => {
        if (prev >= 14) {
          clearInterval(weeklyTimer);
          return 14;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(dailyTimer);
      clearInterval(weeklyTimer);
    };
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 82.3) {
          clearInterval(timer);
          return 82.3;
        }
        return prevCount + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const data = {
    labels: ["Weekly", "Daily", "Empty"],
    datasets: [
      {
        data: [37, 45, 18],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return;

          const dailyGradient = ctx.createLinearGradient(
            chartArea.left,
            chartArea.bottom,
            chartArea.right,
            chartArea.top
          );
          dailyGradient.addColorStop(0.2, "#9EC600");
          dailyGradient.addColorStop(0.8, "#CDF4FF");

          const weeklyGradient = ctx.createLinearGradient(
            chartArea.left,
            chartArea.bottom,
            chartArea.right,
            chartArea.top
          );
          weeklyGradient.addColorStop(1, "#4C73FF");
          weeklyGradient.addColorStop(0.2, "#FFB7F5");

          return [weeklyGradient, dailyGradient, "transparent"];
        },
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  };

  const chartRef = React.useRef(null);

  const totalRevenue = 112340;

  const createGradient = (ctx, colors, chartArea) => {
    const gradient = ctx.createLinearGradient(
      chartArea.left,
      chartArea.bottom,
      chartArea.right,
      chartArea.top
    );
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    return gradient;
  };

  const data1 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          8000, 9000, 18000, 10000, 11000, 15000, 12000, 10500, 11500, 12000,
          8500, 6340,
        ],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return;

          const marchGradient = createGradient(
            ctx,
            ["#33C600", "#CDF4FF"],
            chartArea
          );
          const juneGradient = createGradient(
            ctx,
            ["#B8B7FF", "#6C5DD3"],
            chartArea
          );
          const octoberGradient = createGradient(
            ctx,
            ["#FF4CE2", "#FFB7F5"],
            chartArea
          );

          const monthColors = {
            2: marchGradient,
            5: juneGradient,
            9: octoberGradient,
          };

          return monthColors[context.dataIndex] || "rgba(0,0,0,0.1)";
        },
        borderWidth: 0,
        borderRadius: 6,
        categoryPercentage: 0.8,
        barPercentage: 1,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      display: false,
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="w-full flex flex-col px-4 py-4 gap-x-6">
      <div className="w-full flex justify-center items-center gap-x-6 my-4">
        <View_total icon={menu_icon} label="Total Menu" value={345} />
        <View_total
          icon={revenue_icon}
          label="Total Revenue"
          currency={true}
          value={37193.0}
        />
        <View_total icon={customer_icon} label="Total Customers" value={1349} />
        <View_total icon={order_icon} label="Total Orders" value={3500} />
      </div>

      <div className="w-full flex items-center my-12">
        <div className="flex flex-col bg-[#ffffff] w-2/4 mx-2 px-4 rounded-lg h-[500px]">
          <div className="w-full relative border-b border-[#E6E8F0] py-6 flex justify-between items-center">
            <h1 className="text-[#081735] text-xl font-bold">Revenue</h1>

            <button
              className="w-10 h-full flex justify-center items-center"
              onClick={handle_revenue_pop_btn_click}
            >
              <img src={more_icon} alt="view more" />
            </button>

            {view_revenue_pop && (
              <div
                ref={revenue_pop_ref}
                className="absolute py-4 bg-[#ffffff] top-12 right-2 rounded-lg flex flex-col gap-y-4 px-4 border border-[#E6E8F0]"
              >
                <button className="w-full flex gap-x-4">
                  <span>
                    <img src={view_icon} />
                  </span>
                  View
                </button>
                <button className="w-full flex gap-x-4">
                  <span>
                    <img src={download_icon} />
                  </span>
                  Export
                </button>
                <button className="w-full flex gap-x-4 text-[#FF754C]">
                  <span>
                    <img src={delete_icon} />
                  </span>
                  Download
                </button>
              </div>
            )}
          </div>

          <div className="w-full h-3/4 flex flex-col py-2 px-4 items-baseline justify-end my-auto">
            <div className="">
              <h1 className="text-4xl font-bold mb-6">
                &#x24;{totalRevenue.toLocaleString()}
              </h1>
            </div>
            <Bar ref={chartRef} data={data1} options={options1} />
          </div>

          <div className="flex w-3/4 text-[#8F95B2] mb-8 mt-6">
            <div className="w-1/3 flex justify-center items-center gap-x-1">
              <span
                className="w-3 h-3 rounded-md"
                style={{
                  background: `linear-gradient(315deg, #0049C6 41%, #CDF4FF 100%)`,
                }}
              ></span>
              <small className="text-md text-ellipsis text-nowrap">
                Pending (10%)
              </small>
            </div>
            <div className="w-1/3 flex justify-center items-center gap-x-1">
              <span
                className="w-3 h-3 rounded-md"
                style={{
                  background:
                    "linear-gradient(146deg, #FFB7F5 0%, #6C5DD3 80%)",
                }}
              ></span>
              <small className="text-md">Income</small>
            </div>
            <div className="w-1/3 flex justify-center items-center gap-x-1">
              <span
                className="w-3 h-3 rounded-md"
                style={{
                  background:
                    "linear-gradient(146deg, #FF754C 99%, #FFB7F5 100%)",
                }}
              ></span>
              <small className="text-md">Expense</small>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-[#ffffff] w-2/4 mx-2 rounded-lg h-[500px]">
          <div className="w-full border-b border-[#E6E8F0] py-4 px-4 flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-[#081735] text-xl font-bold">Customers</h1>
              <small className="text-[#8F95B2] text-md">
                Customers that buy our products
              </small>
            </div>

            <span
              className="w-10 h-full flex justify-center items-center"
              role="button"
            >
              <img src={more_icon} alt="view more" />
            </span>
          </div>

          <div className="w-full flex flex-col justify-between gap-y-4 p-6 mb-8">
            <div className="flex  w-full">
              <div className="relative w-72 rounded-full mx-6 my-6 shadow-shadow2">
                {/* Ring background */}
                <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-[#fff]">
                  <div className="w-full h-full rounded-full"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-[20px] border-[#6d5dd32a]"></div>
                </div>

                {/* Pie Chart */}
                <div className="relative w-full h-full rounded-full">
                  <Pie
                    data={data}
                    options={options}
                    className=" w-full bg-transparent rounded-full border-[20px] border-[#fff] shadow-shadow2"
                  />

                  {/* Inner circle with count */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center w-[40%] h-[40%] bg-[#FAFBFF] shadow-shadow3 rounded-full flex flex-col items-center justify-center">
                      <span className="text-lg px-4 font-bold text-[#0049C6]">
                        {count.toFixed(1)}%
                      </span>
                      <div className="text-sm text-[#0049C6]">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-2 flex flex-col justify-center gap-y-6 ">
                <CircularProgress
                  percentage={dailyPercentage}
                  colors={["#4C73FF", "#FFB7F5"]}
                  label="Daily customers"
                  border="#E2E6FF"
                />
                <CircularProgress
                  percentage={weeklyPercentage}
                  colors={["#9EC600", "#CDF4FF"]}
                  label="Weekly new customers"
                  border="#9ec60041"
                />
              </div>
            </div>

            <div className="w-full flex gap-x-2 justify-center items-center mt-8 font-bold">
              <div className="w-1/3 flex justify-center items-center gap-x-1">
                <span
                  className="w-3 h-3 rounded-md"
                  style={{
                    background: `linear-gradient(346deg, #667EFE 63%, #FFB7F5 100%)`,
                  }}
                ></span>
                <small className="text-md">Current Customers</small>
              </div>
              <div className="w-1/3 flex justify-center items-center gap-x-1">
                <span
                  className="w-3 h-3 rounded-md"
                  style={{
                    background: `linear-gradient(300deg, #A3CB31 45%, #CDF4FF 100%)`,
                  }}
                ></span>
                <small className="text-md">New Customers</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-x-4 gap-y-4 items-center px-8 py-4">
        <div className="w-[70%] h-[500px] flex flex-col py-4 px-4 bg-[#ffffff] items-center rounded-lg">
          <div className="border-b border-b-[#E6E8F0] w-full my-4 flex items-center py-2 pb-4">
            <h1 className="text-2xl font-bold text-[#081735]">Customer Map</h1>
          </div>
          <div className="w-full h-full py-2 rounded-xl">
            <CustomerMap
              customers={customers}
              selectedCustomer={selectedCustomer}
            />
          </div>
        </div>
        <div className="w-[30%] py-4 px-4 h-[500px] overflow-x-hidden overflow-y-auto bg-[#ffffff] flex flex-col rounded-lg">
          <div className="w-full my-2 flex items-center py-2">
            <h1 className="text-xl font-bold text-[#081735]">Customer List</h1>
          </div>
          <div className="">
            <CustomerList
              customers={customers}
              onCustomerSelect={setSelectedCustomer}
              selectedCustomer={selectedCustomer}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
