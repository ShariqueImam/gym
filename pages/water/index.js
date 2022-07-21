import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const Water = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"76%"} val={19} />
      <Animator>
        <MainHeading text="How much water do you drink daily?" />
        <div onClick={() => handleClick("0")}>
          <BasicCard cardText="Only coffee or tea ☕️" isClick={Click === "0" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("2")}>
          <BasicCard cardText="Less than 2 glasses 💧 (up to 0,5 l / 17 oz)" isClick={Click === "2" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("6")}>
          <BasicCard cardText="2-6 glasses 💧💧(0,5-1,5 l / 17-50 oz)" isClick={Click === "6" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("10")}>
          <BasicCard cardText="7-10 glasses 💧💧💧 (1,5-2,5 l / 50-85 oz) " isClick={Click === "10" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("20")}>
          <BasicCard cardText="More than 10 glasses 🐳 (more than 2,5 l / 85 oz)" isClick={Click === "20" ? true : false}/>
        </div>
        <Link href={`${Click.length > 0 ? "/meal-prep-time" : ""}`}>
          <div onClick={() => Cookies.set("water", Click)}>
            <Button dis={Click.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Water;
