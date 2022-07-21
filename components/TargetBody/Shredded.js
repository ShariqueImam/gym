import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Cookies from "js-cookie";
import Link from "next/link";
const Shredded = () => {
  const [click, setClick] = useState("");
  const handleClick = (value) => {
    setClick(value);
  };
  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Get Shredded"} />
      <MainHeading text={"Choose the body you want"} />
      <div onClick={() => handleClick("beachbody")}>
        <StartCard
          cardText={"Beach Body"}
          imgUrl={"/1.webp"}
          isClick={click === "beachbody" ? true : false}
        />
      </div>
      <div onClick={() => handleClick("workoutbody")}>
        <StartCard
          cardText={"Workout Body"}
          imgUrl={"/1.webp"}
          isClick={click === "workoutbody" ? true : false}
        />
      </div>
      <div onClick={() => handleClick("crossfitbody")}>
        <StartCard
          cardText={"Cross-fit Body"}
          imgUrl={"/1.webp"}
          isClick={click === "crossfitbody" ? true : false}
        />
      </div>
      <Link href={`${click.length > 0? "/body-type" : ""}`}>
        <div onClick={() => Cookies.set("target-body", click)}>
          <Button dis={click.length > 0 ? false : true} />
        </div>
      </Link>
    </div>
  );
};

export default Shredded;
