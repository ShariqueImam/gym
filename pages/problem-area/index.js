import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Card3 } from "../../components/UI/Card3";
import Link from "next/link";
import Animator from "../../components/UI/Animator";

const ProblemArea = () => {
  return (
    <Animator>
      <MainHeading text="Select problem areas" />
      <Card3 cardText={"Weak chest"} imgUrl="/chest.webp" />
      <Card3 cardText={"Slim arms"} imgUrl="/arms.webp" />
      <Card3 cardText={"Beer belly"} imgUrl="/tummy.webp" />
      <Card3 cardText={"Slim legs"} imgUrl="/legs.webp" />
      <Link href="/height">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default ProblemArea;
