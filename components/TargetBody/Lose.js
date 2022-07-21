import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
import Cookies from "js-cookie";
const Lose = () => {
  const [click, setClick] = useState("");
  const handleClick = (val) => {
    setClick(val);
  };

  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Lose Weight"} />
      <MainHeading text={"Choose the body you want"} />
      <div onClick={() => handleClick("slim")}>
        <StartCard
          cardText={"Slim Body"}
          imgUrl={"/1.webp"}
          isClick={click === "slim" ? true : false}
        />
      </div>
      <div onClick={() => handleClick("slimshredded")}>
        <StartCard
          cardText={"Slim Shredded Body"}
          imgUrl={"/1.webp"}
          isClick={click === "slimshredded" ? true : false}
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

export default Lose;
