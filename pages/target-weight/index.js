import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const style = {
  wrapper: "flex flex-col ",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto",
  input:
    "my-4 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
  height: "text-gray-200 my-8 mx-6",
};
const TargetWeight = () => {
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const [click, setClick] = useState(false);

  const targetChangeHandler = (e) => {
    setTarget(e.target.value);
  };
  const currentChangeHandler = (e) => {
    setCurrent(e.target.value);
  };
  const valid1 = /^[0-9]+$/.test(target) && +target < 200 && +target > 40;

  const valid2 = /^[0-9]+$/.test(current) && +current < 200 && +current > 40;
  return (
    <>
      <ProgressBar scrollLength={"20%"} val={5} />
      <Animator>
        <MainHeading text={"What's your current and target weight?"} />
        <div
          className={style.container}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className="my-12">
            <label htmlFor="current" className="text-gray-200">
              Current Weight:
            </label>
            <input
              type="text"
              id="current"
              placeholder="__kg"
              className={style.input}
              value={`${current}`}
              onChange={currentChangeHandler}
            />
            {click && (
              <p className={`${valid2 ? "hidden" : "flex"}  text-red-500`}>
                {" "}
                Weight should be between 40kg and 200kg
              </p>
            )}
          </div>
          <div className="my-12">
            <label htmlFor="target" className="text-gray-200">
              Target Weight:
            </label>
            <input
              type="text"
              id="target"
              placeholder="__kg"
              className={style.input}
              value={`${target}`}
              onChange={targetChangeHandler}
            />
            {click && (
              <p className={`${valid1 ? "hidden" : "flex"}  text-red-500`}>
                {" "}
                Weight should be between 40kg and 200kg
              </p>
            )}
          </div>
        </div>
        <Link href={`${valid1 && valid2 ? "/level-of-fitness" : ""}`}>
          <div onClick={() => setClick(true) && Cookies.set("weight", target)}>
            <Button dis={target.length > 0 ? false : true}/>
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default TargetWeight;
