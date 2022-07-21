import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
import Cookies from "js-cookie";
const Gain = () => {
  const [click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  console.log(click);
  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Gain Weight"} />
      <MainHeading text={"Choose the body you want"} />
      <div onClick={() => handleClick("athlete")}>
        <StartCard
          cardText={"Athlete"}
          imgUrl={"/1.webp"}
          isClick={click === "athlete" ? true : false}
        />
      </div>
      <div onClick={() => handleClick("hero")}>
        <StartCard
          cardText={"Hero"}
          imgUrl={"/1.webp"}
          isClick={click === "hero" ? true : false}
        />
      </div>
      <div onClick={() => handleClick("bodybuilder")}>
        <StartCard
          cardText={"BodyBuilder"}
          imgUrl={"/1.webp"}
          isClick={click === "bodybuilder" ? true : false}
        />
      </div>
      <Link href={`${click.length > 0? "/body-type" : ""}`}>
        <div onClick={() => Cookies.set("target-body", click)}>
          <Button dis={click.length > 0 ? false : true}/>
        </div>
      </Link>
    </div>
  );
};

export default Gain;
