import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
const WorkoutIssue = () => {
  const [Click, setClick] = useState([]);
  const handleClick = (value) => {
    if (value !== "none") {
      const index = Click.indexOf(value);
      if (index > -1) {
        Click.splice(index, 1);
        setClick([...Click]);
      } else {
        const none = Click.indexOf("none");
        if (none > -1) {
          Click.splice(none, 1);
        }
        setClick([...Click, value]);
      }
    } else {
      const none = Click.indexOf("none");
      if (none > -1) {
        Click.splice(none, 1);
        setClick([...Click]);
      } else {
        setClick(["none"]);
      }
    }
  };
  return (
    <>
      <ProgressBar scrollLength={"36%"} val={9} />
      <Animator>
        <MainHeading
          text={
            "Have you experienced any of these issues in your previous fitness attempts?"
          }
        />
        <div onClick={() => handleClick("motivation")}>
          <BasicCard cardText="Lack of motivation" isClick={Click.includes("motivation") ? true : false}/>
        </div>
        <div onClick={() => handleClick("clearplan")}>
          <BasicCard cardText="Didn't have a clear plan" isClick={Click.includes("clearplan") ? true : false}/>
        </div>
        <div onClick={() => handleClick("hard")}>
          <BasicCard cardText="My workouts were too hard" isClick={Click.includes("hard") ? true : false}/>
        </div>
        <div onClick={() => handleClick("coaching")}>
          <BasicCard cardText="Bad coaching"isClick={Click.includes("coaching") ? true : false} />
        </div>
        <div onClick={() => handleClick("none")}>
          <BasicCard cardText="None of the above" isClick={Click.includes("none") ? true : false}/>
        </div>
        <Link href={`${Click.length > 0 ? "/give-up" : ""}`}>
          <div
            onClick={() => Cookies.set("workout-issue", JSON.stringify(Click))}
          >
            <Button dis={Click.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default WorkoutIssue;
