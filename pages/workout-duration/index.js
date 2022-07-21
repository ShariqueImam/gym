import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const WorkoutDuration = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"68%"} val={17} />
      <Animator>
        <MainHeading text="How much time are you willing to spend on a workout?" />
        <div onClick={() => handleClick("Half")}>
          <BasicCard
            cardText="30 minutes ⏰"
            isClick={Click === "Half" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("Quarter")}>
          <BasicCard
            cardText="45 minutes ⏰"
            isClick={Click === "Quarter" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("One")}>
          <BasicCard
            cardText="1 hour 🕐"
            isClick={Click === "One" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("One")}>
          <BasicCard
            cardText="Let Just Gyym decide"
            isClick={Click === "One" ? true : false}
          />
        </div>
        <Link href={`${Click.length > 0 ? "/level-hormone" : ""}`}>
          <div onClick={() => Cookies.set("workout-duration", Click)}>
            <Button dis={Click.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default WorkoutDuration;
