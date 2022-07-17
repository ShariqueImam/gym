import React from "react";
import Shredded from "../../components/TargetBody/Shredded";
import Lose from "../../components/TargetBody/Lose";
import Gain from "../../components/TargetBody/Gain";
import Animator from "../../components/UI/Animator";

const style = {
  wrapper: "mt-4",
  cardContainer: "flex flex-col",
};

const TargetBody = () => {
  return (
    <Animator className={style.wrapper} >
      <Lose />
      {/* <Gain />
      <Shredded /> */}
    </Animator>
  );
};

export default TargetBody;
