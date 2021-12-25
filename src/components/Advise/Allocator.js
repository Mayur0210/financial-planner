import classes from "./Allocator.module.css";
import { useState } from "react";
import InsuranceAllocator from "./Insure/InsuranceAllocator";
import InvestmentAllocator from "./Invest/InvestmentAllocator";
const Alloactor = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
      <section>
    <ul className={classes.nav}>
      <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>
        Invest 
      </li>
      <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>
        Insure 
      </li>
      
    </ul>
    <div className={classes.outlet}>
          {activeTab==="tab1" ?<InvestmentAllocator /> : <InsuranceAllocator />}
      </div>
      </section>
  );
};


export default Alloactor