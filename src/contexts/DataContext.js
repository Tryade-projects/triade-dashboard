import { createContext } from "react";

const DataContext = createContext({
  constants: {},
  employees: [{}],
  setEmployees: (_array) => {},
  ranks: [{}],
  setRanks: (_array) => {},
  dataDashboard: {},
  setDataDashboard: (_object) => {},
  dataDashboardChart:{},
  setDataDasboardChart: (_object) => {}
});

export default DataContext;
