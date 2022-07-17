import React from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";

import Link from "next/link";
const AdditionalGoals = () => {
  return (
    <Animator>
      <SmallHeading text="We're sure you want not only a better body, but to improve your lifestyle too." />
      <MainHeading text="Tick your additional goals below:" />
      <BasicCard cardText={"Improve sleep"} />
      <BasicCard cardText={"Form a physical habit"} />
      <BasicCard cardText={"Self-discipline"} />
      <BasicCard cardText={"Feel more healthy"} />
      <BasicCard cardText={"Reduce Stress"} />
      <BasicCard cardText={"None of the above"} />
      <Link href="/attention">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default AdditionalGoals;
