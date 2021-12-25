import React from "react";
import { useState, useEffect } from "react";
import SliderInput from "../../UI/slider"
import classes from '../Allocator.module.css'

import { age_marks, tenure_marks, return_marks } from "../../config/data-config";
const InvestmentAllocator = () => {
  const [investment, setInvestent] = useState({
    investment_amount: null,
    age: null,
    tenure: null,
    return_percentage: null,
  });
  const [expectedReturns, setExpectedReturns] = useState(0);
  const investmentChangeHAndeler = (input) => {
    const temp = { ...investment };
    temp["investment_amount"] = input.target.value;
    setInvestent(temp);
  };
  const ageChangeHandeler = (input) => {
    const temp = { ...investment };
    temp["age"] = input.target.value;
    setInvestent(temp);
  };
  const returnChangeHandeler = (input) => {
    const temp = { ...investment };
    temp["return_percentage"] = input.target.value;
    setInvestent(temp);
  };
  const tenureChangeHandeler = (input) => {
    const temp = { ...investment };
    temp["tenure"] = input.target.value;
    setInvestent(temp);
    console.log(investment);
  };

  useEffect(() => {
    // const investment_returns = () => {
    console.log("test");
    const investment_amount = parseFloat(investment["investment_amount"]);
    const tenure = investment["tenure"];
    const return_percentage = investment["return_percentage"]/12;
    if (
      investment_amount != null &&
      tenure != null &&
      return_percentage != null
    ) {
      const investment_returns =
        investment_amount *
        ((Math.pow(1 + return_percentage / 100, tenure) - 1) /
          (return_percentage / 100));
      setExpectedReturns(investment_returns);
      console.log(investment);
      console.log(investment_returns);
    }
    // },
  }, [investment]);

  return (
    <div className={classes.allocator}>
      <div className={classes.investment}>
        <label>Monthly Investent Amount ₹</label>
        <input onChange={investmentChangeHAndeler}></input>
      </div>

      <div className={classes.slider}>
        <label>Age</label>
        <SliderInput
          defaultVal={25}
          valuetext="Age"
          step={1}
          marks={age_marks}
          min={15}
          max={100}
          onChange={ageChangeHandeler}
        />
      </div>

      <div className={classes.slider}>
        <label>Tenure</label>
        <SliderInput
          defaultVal={36}
          valuetext="Tenure"
          step={6}
          marks={tenure_marks}
          min={6}
          max={120}
          onChange={tenureChangeHandeler}
        />
      </div>
      <div className={classes.slider}>
        <label>Expected Return</label>
        <SliderInput
          defaultVal={15}
          valuetext="Returns"
          step={1}
          marks={return_marks}
          min={5}
          max={100}
          onChange={returnChangeHandeler}
        />
      </div>
      <div className={classes.summary}>
      <div>
      <label>At the end of  {investment['tenure']} months you you would have invested ₹ {(investment['tenure'] * investment['investment_amount']).toLocaleString()}</label>
      </div><div>
      <label>And your investment will worth ₹ {expectedReturns.toLocaleString()}</label>

      </div>
      </div>
    </div>
  );
};

export default InvestmentAllocator;
