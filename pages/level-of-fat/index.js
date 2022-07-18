import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import Image from "next/image";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Animator from "../../components/UI/Animator";

import { Button } from "../../components/UI/Button";
import Link from "next/link";
const style = {
  wrapper: "flex flex-col md:flex-row",
  left: "w-[100%] md:w-[50%] flex items-center justify-center",
  right:
    "w-[100%] md:w-[50%] bg-neutral-900 h-[50vh] md:h-[90vh] flex items-center justify-start md:px-8 lg:p-24",
};

const LevelOfFat = () => {
  const [value, setValue] = useState(5);
  const handleChange = (val) => {
    setValue(val);
  };
  return (
    <Animator>
    <div className={style.wrapper}>
      <div className={style.left}>
        <Image src={`/Fat/${value}.webp`} width={220} height={450} />
      </div>
      <div className={style.right}>
        <div className="">
          <MainHeading text={"Choose your level of body fat"} />
          {/* slide */}
          <div className="my-24">
            <Slider
              min={5}
              max={40}
              step={5}
              value={value}
              orientation={"horizontal"}
              tooltip={true}
              // labels={Object}
              // handleLabel={String}
              // format={Function}
              onChange={handleChange}
            />
          </div>
          <Link href={"/problem-area"}>
            <div>
              <Button />
            </div>
          </Link>
        </div>
      </div>
    </div>
    </Animator>
  );
};

export default LevelOfFat;
