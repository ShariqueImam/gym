import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Link from "next/link";
const Pullups = () => {
  return (
    <>
      <ProgressBar scrollLength={"56%"} val={14} />
      <Animator>
        <MainHeading text="How many pull-ups can you do in one round?" />
        <BasicCard cardText="I can’t make a single pull-up" />
        <BasicCard cardText="Less than 5 🔥" />
        <BasicCard cardText="5 to 10 🔥🔥" />
        <BasicCard cardText="More than 10 🔥🔥🔥" />
        <Link href="/workout-place">
          <div>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Pullups;
