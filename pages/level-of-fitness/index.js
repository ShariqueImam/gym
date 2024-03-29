import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Cookies from "js-cookie";
const fitness = [
  {
    h: "Newcomer",
    p: "Whenever I sit on the floor, it's hard for me to stand up.",
  },
  {
    h: "Newcomer",
    p: "After climbing up and down several steps of stairs, I need to catch my breath.",
  },
  { h: "Newcomer", p: "I can do walking as a cardio, but running is tough." },
  {
    h: "Newcomer",
    p: "I work out few times in a year, enough to break a sweat.",
  },
  {
    h: "Amateur",
    p: "I try to exercise once in a week, but still not regular.",
  },
  {
    h: "Amateur",
    p: "I started to workout at least once a week on a regular basis.",
  },
  {
    h: "Amateur",
    p: "I exercise twice a week at least for the last 3 months.",
  },
  { h: "Pro", p: "I'm committed to fitness and I train whenever I can." },
  {
    h: "Pro",
    p: "Oh, trust me. I'm in a great shape, but still want to go one level above.",
  },
  { h: "Pro", p: "I'm on fire! I'm in the best shape in my life." },
];

function valuetext(value) {
  return `${value}°C`;
}
const LevelOfFitnes = () => {
  const [value, setValue] = useState(1);
  const handleChange = (e, event, h) => {
    setValue(event);
  };
  const content = fitness[value - 1];
  return (
    <>
      <ProgressBar scrollLength={"24%"} val={6} link="/target-weight"/>
      <Animator>
        <div className="mx-auto" style={{ fontFamily: "Inter,sans-serif" }}>
          <MainHeading text={"What's your level of fitness?"} />
          <SmallHeading
            text={
              "Choose your current level of fitness to align the workout plan with."
            }
          />
          {/* slider */}
          <div
            className="my-8 md:my-12 flex items-center justify-center font-bold"
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Always-visible"
                defaultValue={1}
                getAriaValueText={valuetext}
                step={1}
                marks
                min={1}
                onChange={handleChange}
                max={10}
                color="warning"
                valueLabelDisplay="on"
              />
            </Box>
          </div>
          <div className="text-gray-100 mx-auto w-[90%] md:w-[40%] lg:w-[30%] mx-auto bg-neutral-900 px-7 py-6">
            <h2 className="font-bold text-xl text-gray-50">{content.h}</h2>
            <p className="text-stone-300 my-2">{content.p}</p>
          </div>
          <Link href="/loh">
            <div onClick={Cookies.set("level-of-fitness", value)} className="mt-48 md:mt-2">
              <Button text={"Continue"} />
            </div>
          </Link>
        </div>
      </Animator>
    </>
  );
};

export default LevelOfFitnes;
