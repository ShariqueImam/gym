import React from "react";
import MoneyBack from "./MoneyBack";
import FullPlan from "./FullPlan";
import Plan from "./Plan/Plan";
import Try from "./Try";
import Result from "./Result/Result";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
import Get from "./Get/Get";
import Summary from "./Summary/Summary";
const style = {
  wrapper: "",
};
const FinalPage = () => {
  return (
    <div className={style.wrapper}>
      <Result />
      <Summary />
      <PlanFeatures />
      <Try />
      <Plan />
      <Get />
      <FullPlan />
      <MoneyBack />
    </div>
  );
};

export default FinalPage;
