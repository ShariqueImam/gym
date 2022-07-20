import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Link from "next/link";
const Workouts = () => {
  return (
    <>
      <ProgressBar scrollLength={"32%"} val={8} />

      <Animator>
        <MainHeading text={"What sports are you interested in?"} />
        <BasicCard cardText="Gym Workouts" />
        <BasicCard cardText="Workouts at home" />
        <BasicCard cardText="Boxing" />
        <BasicCard cardText="Other martial arts" />
        <BasicCard cardText="Jogging" />
        <BasicCard cardText="None of the above" />
        <Link href={"/workout-issue"}>
          <div>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Workouts;
