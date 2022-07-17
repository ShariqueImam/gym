import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";


const WorkoutDuration = () => {
  return (
    <Animator>
      <MainHeading text="How much time are you willing to spend on a workout?" />
      <BasicCard cardText="30 minutes ⏰"/>
      <BasicCard cardText="45 minutes ⏰"/>
      <BasicCard cardText="1 hour 🕐"/>
      <BasicCard cardText="Let MadMuscles decide"/>
      <Link href="level-hormone">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default WorkoutDuration;