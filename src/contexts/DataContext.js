import { createContext } from "react";

const DataContext = createContext({
  constants: {},
  employees: [{}],
  setEmployees: (_array) => {},
  ranks: [{}],
  setRanks: (_array) => {},
  dataDashboard: {},
  setDataDashboard: (_object) => {},
  dataDashboardChart: {},
  setDataDashboardChart: (_object) => {},
});

export default DataContext;
