import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from '../../components/UI/Button'
import Animator from "../../components/UI/Animator";

const style = {
  wrapper: "flex flex-col md:flex-row",
  left: "w-[100%] md:w-[50%] flex items-center justify-center",
  right:
    "w-[100%] md:w-[50%] bg-neutral-900 h-[70vh] md:h-[90vh] text-gray-100 flex flex-col justify-center px-4 md:px-12",
};
const Attention = () => {
  return (
    <Animator>
    <div className={style.wrapper}>
      <div className={style.left}>
        <Image src={"/status.webp"} width={700} height={800} />
      </div>
      <div className={style.right}>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl my-7"
          style={{ fontFamily: "Yeseva One , cursive" }}
        >
          We care about your health
        </h2>
        <p className="my-4">If you have any of the following conditions:</p>
        <ul>
          <li>Heart disease</li>
          <li>Severe scoliosis</li>
          <li>Spinal damage</li>
          <li>Benign or malignant tumor</li>
          <li>Hypertension</li>
        </ul>
        <p className="my-3 text-gray-400">
          Please contact your physician before starting to follow the MadMuscles
          program.
        </p>
        <Link href={"/push-ups"}>
          <div>
            <Button />
          </div>
        </Link>
      </div>
    </div>
    </Animator>
  );
};

export default Attention;
