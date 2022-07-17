import React,{useState} from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
const fitness = [
  { h: "Newcomer", p: "Whenever I sit on the floor, it's hard for me to stand up." },
  { h: "Newcomer", p: "After climbing up and down several steps of stairs, I need to catch my breath." },
  { h: "Newcomer", p: "I can do walking as a cardio, but running is tough." },
  { h: "Newcomer", p: "I work out few times in a year, enough to break a sweat." },
  { h: "Amateur", p: "I try to exercise once in a week, but still not regular." },
  { h: "Amateur", p: "I started to workout at least once a week on a regular basis." },
  { h: "Amateur", p: "I exercise twice a week at least for the last 3 months." },
  { h: "Pro", p: "I'm committed to fitness and I train whenever I can." },
  { h: "Pro", p: "Oh, trust me. I'm in a great shape, but still want to go one level above." },
  { h: "Pro", p: "I'm on fire! I'm in the best shape in my life." },
];
const LevelOfFitnes = () => {
  const [value,setValue] = useState(1)
  const handleChange = (val) => {
    setValue(val);
  };
  const content = fitness[value-1]
  console.log(content)
  return (
    <Animator>
      <MainHeading text={"What's your level of fitness?"} />
      <SmallHeading
        text={
          "Choose your current level of fitness to align the workout plan with."
        }
      />
      {/* slider */}
      <div className="my-24 w-[85%] md:w-[40%] lg:w-[30%] mx-auto">
        <Slider
          min={1}
          max={10}
          step={1}
          value={value}
          orientation={"horizontal"}
          tooltip={true}
          // labels={Object}
          // handleLabel={String}
          // format={Function}
          onChange={handleChange}
        />
      </div>
      <div className="text-gray-100 mx-auto w-[80%] md:w-[40%] lg:w-[30%] mx-auto bg-neutral-900 px-7 py-6">
        <h2>{content.h}</h2>
        <p>{content.p}</p>
      </div>
      <Link href="/workouts">
        <div>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default LevelOfFitnes;
