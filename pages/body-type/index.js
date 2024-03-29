import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Card2 } from "../../components/UI/Card2";
import Animator from "../../components/UI/Animator";
import ProgessBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
const BodyType = () => {
  const [click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgessBar scrollLength={"8%"} val={2} link="/target-body"/>
      <Animator>
        <MainHeading text={"Choose your body type"} />
        <SmallHeading text="Choose the one that is most similar to yours now. There are no good or bad body types." />
        <div onClick={() => handleClick("ectomorph")}  style={{fontFamily:'Inter,sans-serif'}}>
          <Card2
            cardText={"Ectomorph"}
            para="Little body fat and muscle. Have a hard time gaining weight."
            imgUrl="/1.webp"
            isClick={click === "ectomorph" ? true : false}
          />
        </div>
        <div onClick={() => handleClick("mesomorph")}>
          <Card2
            cardText={"Mesomorph"}
            para="Little body fat and muscle. Have a hard time gaining weight."
            imgUrl="/1.webp"
            isClick={click === "mesomorph" ? true : false}
          />
        </div>
        <div onClick={() => handleClick("endomorph")}>
          <Card2
            cardText={"Endomorph"}
            para="Little body fat and muscle. Have a hard time gaining weight."
            imgUrl="/1.webp"
            isClick={click === "endomorph" ? true : false}
          />
        </div>
        <div className="rounded border-2 border-stone-700 w-[90%] md:w-[40%] lg:w-[25%] mx-auto text-gray-200 px-6 py-8 ">
          <div className="flex items-center">
            <h2 className="text-2xl text-gray-100">
              Test to determine your body type
            </h2>
            <Image src={"/determine-body-type.svg"} height={170} width={130} />
          </div>
          <p className="text-stone-300 text-sm my-6">
            Grip your opposite wrist using the thumb and an index finger. If
            you’re right-handed, use your right hand to grab your left wrist.
          </p>
          <p>Thumb and index finger:</p>
          <p className="text-stone-300 my-1 "><span className="font-bold text-gray-50">Ectomorph — </span> wrapping around with ease.</p>
          <p className="text-stone-300 my-1 "><span className="font-bold text-gray-50">Mesomorph — </span> touching each other.</p>
          <p className="text-stone-300 my-1 "><span className="font-bold text-gray-50">Endomorph — </span> doesn’t come into contact.</p>
        </div>
        <Link href={`${click.length > 0 ? "/level-of-fat" : ""}`}>
          <div onClick={Cookies.set("body-type", click)}>
            <Button dis={click.length > 0 ? false : true} text={'Continue'}/>
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default BodyType;
