import React from "react";
import { MainHeading,SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";

import Link from "next/link";
const Products = () => {
  return (
    <Animator>
      <MainHeading text="Let us create a meal plan based on your preferences" />
      <SmallHeading text="You can always adjust a meal plan later" />
      <BasicCard cardText="Less than 30 min 🥑"/>
      <BasicCard cardText="30-60 min 🥑 🥑"/>
      <BasicCard cardText="More than 1 hour 🥑 🥑 🥑"/>
      <BasicCard cardText="I prefer to order meals or go out to eat 📦"/>
      <Link href="/challenge">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default Products;