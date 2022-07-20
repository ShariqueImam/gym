import React from "react";
import SingleFeature from "./SingleFeature";
import { MainHeading } from "../../UI/Heading";
import {GiStairsGoal,GiRunningShoe} from 'react-icons/gi'
import {MdTimer}from 'react-icons/md'
import {BsFillCalendarMonthFill}from 'react-icons/bs'
const style = {
  wrapper: "my-24",
  container:'flex flex-wrap w-[95%] md:w-[70%] lg:w-[50%] mx-auto items-center justify-center'
};
const PlanFeatures = () => {
  return (
    <div className={style.wrapper}>
      <MainHeading text={"Shredded plan for Shariq is ready!"} />
      <div className={style.container}>
        <SingleFeature Icon={GiStairsGoal} heading={'Goal'} text={'Get Shredded'}/>
        <SingleFeature Icon={MdTimer} heading={'Duration'} text={'1 Hour'}/>
        <SingleFeature Icon={GiRunningShoe} heading={'Fitness Level'} text={'Intermediate'}/>
        <SingleFeature Icon={BsFillCalendarMonthFill} heading={'Place to Work'} text={'Gym'}/>
      </div>
    </div>
  );
};

export default PlanFeatures;
