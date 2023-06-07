import React, { useState, useContext, useEffect } from "react";
import Chart from "react-apexcharts";
import DataContext from "../../../contexts/DataContext";

//labels colors
const firstLabelsColor = "#A098AE";
const secondLabelColor = "#303972";
let listLabelColor = [
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
  firstLabelsColor,
];

function getTheMonth() {
  let today = Date.now();
  let todayDateFormat = new Date(today);
  let todayMonth = todayDateFormat.getMonth();
  return todayMonth;
}

function changelabelsColor() {
  let value = getTheMonth();
  listLabelColor.splice(value, 1, secondLabelColor);
  return listLabelColor;
}

//ApexCharts
const DashboardCharts = (props) => {
  const { dataDashboardChart } = useContext(DataContext);
  const [active, setActive] = useState(true);

  const [state, setState] = useState({
    series: [
      {
        name: "Dépenses",
        data: dataDashboardChart.monthlyExpenseDatas,
      },
      {
        name: "Revenus",
        data: dataDashboardChart.monthlyGainDatas,
      },
    ],

    options: {
      colors: ["#FCC43E", "#FB7D5B"],

      chart: {
        id: "chart",
        zoom: { enabled: false },
        toolbar: { show: false },
      },

      tooltip: {
        enabled: true,
        x: { show: false },
        style: {
          fontSize: "16px",
          fontFamily: "Poppins",
        },
        marker: { show: true },
        fixed: {
          enabled: true,
          position: "topRight",
        },
      },

      fill: {
        type: "gradient",
        opacity: 0.2,
        gradient: {
          opacityFrom: 0.7,
          opacityTo: 0.2,
        },
      },

      dataLabels: { enabled: false },

      legend: {
        show: false,
        position: "top",
        horizontalAlign: "right",
        fontSize: "14px",
        markers: {
          width: 13,
          height: 13,
          strokeWidth: 1,
          strokeColor: ["#FCC43E", "#FB7D5B"],
          fillColors: ["transparent", "transparent"],
          offsetX: -3,
          offsetY: 2,
        },
      },

      grid: {
        borderColor: "#C1BBEB",
        xaxis: {
          lines: { show: true },
        },
        yaxis: {
          lines: { show: false },
        },
      },

      xaxis: {
        categories: [
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
        axisBorder: { show: false },
        tooltip: { enabled: false },
        labels: {
          show: false,
          style: {
            colors: changelabelsColor(),
            fontSize: "12px",
            fontFamily: "Poppins, sans-serif",
          },
          offsetY: 5,
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: "#a098ae",
            fontFamily: "Poppins",
          },
          formatter: function (value) {
            return value + "k";
          },
          offsetX: -10,
        },
      },

      stroke: { curve: "smooth" },
    },
  });

  return (
    <div className="dashboardCharts">
      <h2>Finances de l'entreprise</h2>
      {active && <h4>Survolez le tableau pour plus d'informations</h4>}

      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="100%"
        height="93%"
        onMouseEnter={() => {
          setActive(false);
        }}
      />
    </div>
  );
};

export default DashboardCharts;
