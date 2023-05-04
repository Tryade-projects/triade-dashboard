import { createContext } from "react";

const CONSTANTSContext = createContext({
  CONSTANTS: {},
});

const EmployeesContext = createContext({
  employees: [{}],
  setEmployees: (_array) => {},
});

const RanksContext = createContext({
  ranks: [{}],
  setRanks: (_array) => {},
});

const DataDashboardContext = createContext({
  dataDashboard: {},
  setDataDashboard: (_object) => {},
});

export {
  CONSTANTSContext,
  EmployeesContext,
  RanksContext,
  DataDashboardContext,
};
