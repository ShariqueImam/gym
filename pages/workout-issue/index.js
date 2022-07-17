import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";

import { Button } from "../../components/UI/Button";
import Link from "next/link";
const WorkoutIssue = () => {
  return (
    <Animator>
      <MainHeading
        text={
          "Have you experienced any of these issues in your previous fitness attempts?"
        }
      />
      <BasicCard cardText="Lack of motivation" />
      <BasicCard cardText="Didn't have a clear plan" />
      <BasicCard cardText="My workouts were too hard" />
      <BasicCard cardText="Bad coaching" />
      <BasicCard cardText="None of the above" />
      <Link href={"/give-up"}>
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default WorkoutIssue;
