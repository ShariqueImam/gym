import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Time = () => {
  return (
    <>
      <ProgressBar scrollLength={"80%"} val={20} />
      <Animator>
        <MainHeading text="How much time are you ready to spend per one meal prep?" />
        <BasicCard cardText="Less than 30 min 🥑" />
        <BasicCard cardText="30-60 min 🥑 🥑" />
        <BasicCard cardText="More than 1 hour 🥑 🥑 🥑" />
        <BasicCard cardText="I prefer to order meals or go out to eat 📦" />
        <Link href="/products">
          <div>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Time;
