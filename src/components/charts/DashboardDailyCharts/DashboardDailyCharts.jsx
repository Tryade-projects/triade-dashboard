import React from 'react';
import Chart from "react-apexcharts";
import moment from 'moment/moment';
import 'moment/locale/fr'; // Importer la langue française

const newData = [
  [1678834800, 0, 0],
  [1678921200, 26, 9],
  [1679007600, 26, 18],
  [1679094000, 26, 17],
  [1679180400, 26, 65],
  [1679266800, 35, 65],
  [1679353200, 45, 65],
  [1679439600, 65, 65],
  [1679526000, 140, 65],
  [1679612400, 130, 185],
  [1679698800, 60, 225],
  [1679785200, 260, 65],
  [1679868000, 210, 150],
  [moment().unix(), 20, 0]
];

moment.locale('fr');

function processNewData(newData) {
  const dailyExpensesDatas = [];
  const dailyGainDatas = [];
  const categories = [];

  const today = moment.unix(newData[newData.length - 1][0]);
  for (let i = 0; i < 14; i++) {
    const date = today.clone().subtract(i, 'days');
    const day = date.format("ddd").replace(/\./g, '');
    const data = newData.find((item) => {
      return moment.unix(item[0]).isSame(date, 'day');
    });
    if (data) {
      const expense = data[1];
      const gain = data[2];
      categories.unshift(day);
      dailyExpensesDatas.unshift(expense);
      dailyGainDatas.unshift(gain);
    } else {
      categories.unshift(day);
      dailyExpensesDatas.unshift(0);
      dailyGainDatas.unshift(0);
    }
  }

  return {
    categories: categories,
    series: [
      {
        name: "Dépenses",
        data: dailyExpensesDatas
      },
      {
        name: "Revenus",
        data: dailyGainDatas
      }
    ]
  };
}

function DashboardCharts() {
  const { categories, series } = processNewData(newData);

  const options = {
    colors: ['#FCC43E', '#FB7D5B'],

    chart: {
      id: "chart",
      zoom: { enabled: false },
      toolbar: { show: false },
    },

    tooltip: {
      enabled: true,
      x: { show: false },
      style: {
        fontSize: '16px',
        fontFamily: "Poppins",
      },
      marker: { show: true },
      fixed: {
        enabled: true,
        position: "topRight"
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
        strokeColor: ['#FCC43E', '#FB7D5B'],
        fillColors: ["transparent", "transparent"],
        offsetX: -3,
        offsetY: 2
      }
    },

    grid: {
      borderColor: "#C1BBEB",
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      }
    },

    xaxis: {
      categories: categories,
      axisBorder: { show: false },
      tooltip: { enabled: false },
      labels: {
        show: true,
        style: {
          colors: ["#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#a098ae", "#303972"],
          fontSize: '12px',
          fontFamily: "Poppins, sans-serif",
        },
        offsetY: 5
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#a098ae",
          fontFamily: "Poppins"
        },
        formatter: function (value) {
          return value + "k";
        },
        offsetX: -10,
      },
    },

    stroke: { curve: 'smooth' }
  }

  return (
    <div className="dashboardDailyCharts">
      <h2>Analyse financière</h2>
      <h4>Survolez le tableau pour plus d'informations</h4>
      <Chart 
        options={options} 
        series={series} 
        type="area" 
        width="100%" 
        height="90%" 
      />
    </div>
  );
};

export default DashboardCharts;