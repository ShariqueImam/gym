import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";

import Link from "next/link";

const WorkoutPlace = () => {
  return (
    <Animator>
      <MainHeading text="Choose the place for your workouts" />
      <BasicCard cardText="Home 🏡"/>
      <BasicCard cardText="Gym 🏋️‍♂️"/>
      <Link href="workout-frequency">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default WorkoutPlace;