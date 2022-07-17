import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";

import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";

const WorkoutFrequency = () => {
  return (
    <Animator>
      <MainHeading text="How many times per week have you trained in the last 3 months?" />
      <BasicCard cardText="Not at all 😔"/>
      <BasicCard cardText="1-2 times a week 💪"/>
      <BasicCard cardText="3 times a week 💪⚡️"/>
      <BasicCard cardText="More than 3 times a week 🏆"/>

      <Link href="workout-duration">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default WorkoutFrequency;