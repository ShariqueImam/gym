import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const WorkoutFrequency = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"64%"} val={16} />
      <Animator>
        <MainHeading text="How many times per week have you trained in the last 3 months?" />
        <div onClick={() => handleClick("0")}>
          <BasicCard
            cardText="Not at all 😔"
            isClick={Click === "0" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("2")}>
          <BasicCard
            cardText="1-2 times a week 💪"
            isClick={Click === "2" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("3")}>
          <BasicCard
            cardText="3 times a week 💪⚡️"
            isClick={Click === "3" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("4")}>
          <BasicCard
            cardText="More than 3 times a week 🏆"
            isClick={Click === "4" ? true : false}
          />
        </div>
        <Link href={`${Click.length > 0 ? "/workout-duration" : ""}`}>
          <div onClick={() => Cookies.set("workout-frequency", Click)}>
            <Button dis={Click.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default WorkoutFrequency;
