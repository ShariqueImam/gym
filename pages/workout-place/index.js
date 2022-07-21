import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";

const WorkoutPlace = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"60%"} val={15} />
      <Animator>
        <MainHeading text="Choose the place for your workouts" />
        <div onClick={() => handleClick("home")}>
          <BasicCard
            cardText="Home 🏡"
            isClick={Click === "home" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("gym")}>
          <BasicCard
            cardText="Gym 🏋️‍♂️"
            isClick={Click === "gym" ? true : false}
          />
        </div>
        <Link href={`${Click.length > 0 ? "/workout-frequency" : ""}`}>
          <div onClick={() => Cookies.set("workout-place", Click)}>
            <Button dis={Click.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default WorkoutPlace;
