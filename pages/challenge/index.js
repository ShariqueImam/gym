import React from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Challenge = () => {
  return (
    <>
      <ProgressBar scrollLength={"88%"} val={22} />
      <Animator>
        <MainHeading text="In addition to your goal, what challenge would you like to join?" />
        <BasicCard cardText="No excuse! 😎" />
        <BasicCard cardText="30 days without junk food! 🥑" />
        <BasicCard cardText="80 Club: do 80 push-ups in one round! 😤" />
        <BasicCard cardText="I’ll take on all the challenges! 🙌" />
        <BasicCard cardText="None of the above" />
        <Link href="/name">
          <div>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Challenge;
