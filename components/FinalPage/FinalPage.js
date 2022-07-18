import React from "react";
import MoneyBack from "./MoneyBack";
import FullPlan from "./FullPlan";
import Plan from "./Plan/Plan";
import Try from "./Try";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
const style = {
  wrapper: "",
};
const FinalPage = () => {
  return (
    <div className={style.wrapper}>
      <PlanFeatures />
      <Try />
      <Plan />
      <FullPlan />
      <MoneyBack />
    </div>
  );
};

export default FinalPage;
