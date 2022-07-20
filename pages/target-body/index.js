import React from "react";
import Shredded from "../../components/TargetBody/Shredded";
import Lose from "../../components/TargetBody/Lose";
import Gain from "../../components/TargetBody/Gain";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const style = {
  wrapper: "mt-4",
  cardContainer: "flex flex-col",
};

const TargetBody = () => {
  return (
    <>
      <ProgressBar scrollLength={"4%"} val={1} />
      <Animator className={style.wrapper}>
        <Lose />
        {/* <Gain />
      <Shredded /> */}
      </Animator>
    </>
  );
};

export default TargetBody;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
