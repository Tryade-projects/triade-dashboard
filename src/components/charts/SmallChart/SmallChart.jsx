import React, { Component } from 'react';
import Chart from "react-apexcharts";

//Apexcharts series Datas for every months
var expensesDatas = [0, 0, 55, 30, 0, 0, 0, 98, 130, 120, 410, 310]

//labels colors
const firstLabelsColor = '#A098AE'
const secondLabelColor = "#303972"
let listLabelColor = [firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor, firstLabelsColor]

function getTheMonth() {
  let today = Date.now();
  let todayDateFormat = new Date(today);
  let todayMonth = todayDateFormat.getMonth();
  return todayMonth;
}

//ApexCharts
class DashboardCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Dépenses",
          data: expensesDatas
        },
      ],

      options: {

        colors: ['#4cbc9a'],

        chart: {
          id: "chart",
          zoom: { enabled: false },
          toolbar: { show: false },
        },

        tooltip: {
          enabled: false,
          fixed: {
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
        },

        grid: {
          xaxis: {
            lines: { show: false }
          },
          yaxis: {
            lines: { show: false }
          }
        },

        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
 

          axisBorder: { show: false },
          tooltip: { enabled: false },
          labels: {
            show: false, //
          },
          axisTicks:{
            show:false
          }
        },

        yaxis: {

          labels: {
            show:false,
          },
        },

        stroke: { curve: 'smooth' }
      },

    };
  }






  render() {

    return (
      <div className="smallChart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}


export default DashboardCharts