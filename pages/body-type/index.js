import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Card2 } from "../../components/UI/Card2";
import Animator from "../../components/UI/Animator";
import ProgessBar from "../../components/ProgressBar/ProgressBar";

import Link from "next/link";
const BodyType = () => {
  const [type, setType] = useState("");
  return (
    <>
      <ProgessBar scrollLength={'8%'} val={2}/>
      <Animator>
        <MainHeading text={"Choose your body type"} />
        <SmallHeading text="Choose the one that is most similar to yours now. There are no good or bad body types." />
        <div>
          <Card2
            cardText={"Ectomorph"}
            para="Little body fat and muscle. Have a hard time gaining weight."
            imgUrl="/1.webp"
          />
        </div>
        <div>
          <Card2
            cardText={"Mesomorph"}
            para="Little body fat and muscle. Have a hard time gaining weight."
            imgUrl="/1.webp"
          />
        </div>

        <Card2
          cardText={"Endomorph"}
          para="Little body fat and muscle. Have a hard time gaining weight."
          imgUrl="/1.webp"
        />
        <div className="rounded border-2 border-stone-700 w-[90%] md:w-[40%] lg:w-[25%] mx-auto text-gray-200 px-6 py-8 ">
          <h2 className="text-3xl  text-gray-100 px-4">
            Test to determine your body type
          </h2>
          <p className="text-stone-400 text-xs my-6">
            Grip your opposite wrist using the thumb and an index finger. If
            you’re right-handed, use your right hand to grab your left wrist.
          </p>
          <p>Thumb and index finger:</p>
          <p>Ectomorph — wrapping around with ease.</p>
          <p>Mesomorph — touching each other.</p>
          <p>Endomorph — doesn’t come into contact.</p>
        </div>
        <Link href="level-of-fat">
          <div>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default BodyType;
