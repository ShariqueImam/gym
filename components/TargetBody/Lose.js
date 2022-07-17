import React from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
const Lose = () => {
  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Lose Weight"} />
      <MainHeading text={"Choose the body you want"} />
      <StartCard cardText={"Slim Body"} imgUrl={"/1.webp"} />
      <StartCard cardText={"Slim Shredded Body"} imgUrl={"/1.webp"} />
      <Link href={"/body-type"}>
        <div>
          <Button />
        </div>
      </Link>
    </div>
  );
};

export default Lose;
