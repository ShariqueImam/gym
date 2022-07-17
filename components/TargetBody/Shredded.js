import React from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
const Shredded = () => {
  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Get Shredded"} />
      <MainHeading text={"Choose the body you want"} />
      <StartCard cardText={"beachBody"} imgUrl={"/1.webp"} />
      <StartCard cardText={"Workout Body"} imgUrl={"/1.webp"} />
      <StartCard cardText={"Cross-fit Body"} imgUrl={"/1.webp"} />
      <Link href={"/body-type"}>
        <div>
          <Button />
        </div>
      </Link>
    </div>
  );
};

export default Shredded;
