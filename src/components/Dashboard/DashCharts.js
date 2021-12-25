import classes from "./DashCharts.module.css"
import DonutChart from "./Charts/DonutChart";

const pv_data = [
  { name: "Equity", value: 100000 },
  { name: "Debt", value: 30000 },
  { name: "Commodities", value: 200000 },
  { name: "Currency", value: 50000 },
];

const principal_data = [
  { name: "Equity", value: 110000 },
  { name: "Debt", value: 30100 },
  { name: "Commodities", value: 225000 },
  { name: "Currency", value: 45000 },
];

const DashCharts = () => {
  return (
    <div >
      <h2>Your Portfolio Split</h2>
      <div className={classes.investmentSplit}>
      <div>
        <h3>Invested Amount</h3>
        <DonutChart data={principal_data} />
      </div>
      <div>
        <h3>Invested Amount</h3>
        <DonutChart data={pv_data} />
      </div>
      </div>
    </div>
  );
};

export default DashCharts;
