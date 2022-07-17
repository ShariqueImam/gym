import React from 'react'
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
const Gain = () => {
  return (
   <div>
     <SmallHeading text={"Ok, so your goal is to Gain Weight"} />
      <MainHeading text={"Choose the body you want"} />
      <StartCard cardText={"Athlete"} imgUrl={"/1.webp"} />
      <StartCard cardText={"Hero"} imgUrl={"/1.webp"} />
      <StartCard cardText={"BodyBuilder"} imgUrl={"/1.webp"} />
      <Link href={"/body-type"}>
        <div>
          <Button />
        </div>
      </Link>
   </div>
  )
}

export default Gain