import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";

const Water = () => {
  return (
    <Animator>
      <MainHeading text="How much water do you drink daily?" />
      <BasicCard cardText="Only coffee or tea ☕️"/>
      <BasicCard cardText="Less than 2 glasses 💧 (up to 0,5 l / 17 oz)"/>
      <BasicCard cardText="2-6 glasses 💧💧(0,5-1,5 l / 17-50 oz)"/>
      <BasicCard cardText="7-10 glasses 💧💧💧 (1,5-2,5 l / 50-85 oz) "/>
      <BasicCard cardText="More than 10 glasses 🐳 (more than 2,5 l / 85 oz)"/>
      <Link href="/meal-prep-time">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default Water;