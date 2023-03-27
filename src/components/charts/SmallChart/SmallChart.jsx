  import React, { Component } from 'react';
  import Chart from "react-apexcharts";

  function generateWeeksArray() {
    const weeks = [];
    const currentYear = new Date().getFullYear();
    const firstDayOfYear = new Date(currentYear, 0, 1);
    const daysOffset = firstDayOfYear.getDay() == 0 ? -6 : 1 - firstDayOfYear.getDay();
    const firstMondayOfYear = new Date(currentYear, 0, 1 + daysOffset);
    for (let i = 0; i < 52; i++) {
      const mondayOfTheWeek = new Date(firstMondayOfYear);
      mondayOfTheWeek.setDate(mondayOfTheWeek.getDate() + (i * 7));
      const weekNumber = i + 1;
      weeks.push(weekNumber);
    }
    return weeks;
  }

  function generateExpensesData(nbrOfWeeks) {
    let expensesData = [];
    for (let i = 0; i < nbrOfWeeks; i++) {
      expensesData.push(0);
    }
    return expensesData;
  }


  //Apexcharts series Datas for every weeks
  //The position of each data correspond with the num of the week
  let nbrOfWeekInTheYear = generateWeeksArray().length;
  let expensesDatas = generateExpensesData(nbrOfWeekInTheYear); //Ajouter ensuite les valeurs actuelles stocké dans un array

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
            categories: generateWeeksArray(),
  

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