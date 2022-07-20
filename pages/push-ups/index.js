import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Card3 } from "../../components/UI/Card3";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Link from "next/link";
const Pushups = () => {
  return (
    <>
      <ProgressBar scrollLength={"52%"} val={13} />
      <Animator>
        <MainHeading text="How many push-ups can you do in one round?" />
        <BasicCard cardText="Less than 10 💪" />
        <BasicCard cardText="10 to 20 💪💪" />
        <BasicCard cardText="21 to 30 💪💪💪" />
        <BasicCard cardText="More than 30 😤" />
        <Link href="/pull-ups">
          <div>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Pushups;
