import React from "react";
import Image from "next/image";
import { MainHeading } from "../../UI/Heading";
import SinglePlanCard from "./SinglePlanCard";
import { Button } from "../../UI/Button";

import Link from "next/link";
const style = {
  wrapper:
    "bg-neutral-900 px-3 md:px-12 py-8 md:py-12 flex flex-col md:flex-row w-[95%] md:w-[70%] lg:w-[60%] mx-auto",
  left: "w-[95%] md:w-[50%] flex items-center justify-center",
  right: "w-[95%] md:w-[50%] ",
};
const Plan = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Image src={"/final/a.webp"} height={500} width={200} />
      </div>
      <div className={style.right}>
        <h2 className="text-xl text-gray-200 md:text-4xl">
          Choose the best plan for you
        </h2>
        <Link href={'/download'}>
          <SinglePlanCard text={"3-MONTH PLAN"} total={49.99} per={0.54} />
        </Link>
        <Link href={'/download'}>

          <SinglePlanCard text={"6-MONTH PLAN"} total={59.99} per={0.33} />
        </Link>
        <Link href={'/download'}>
          <SinglePlanCard text={"1-MONTH PLAN"} total={29.99} per={1.0} />
        </Link>
        <Link href="">
          <div>
            <Button />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Plan;
