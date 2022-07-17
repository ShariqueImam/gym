import React from "react";
import { MainHeading } from "../../components/UI/Heading";
import useInput from "../../components/hooks/validateInput";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";

const style = {
  wrapper: "flex flex-col ",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto",
  input:
    "my-4 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
  height: "text-gray-200 my-8 mx-6",
};
const TargetWeight = () => {
  const {
    value: current,
    valueIsValid: currentIsValid,
    hasError: currentHasError,
    inputChangeHandler: currentChangeHandler,
    reset: currentReset,
  } = useInput((val) => val.includes(0));
  const {
    value: target,
    valueIsValid: targetIsValid,
    hasError: targetHasError,
    inputChangeHandler: targetChangeHandler,
    reset: targetReset,
  } = useInput((val) => val.includes(0));
  const handleClick =()=>{
    
  }
  return (
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
        </div>
      </div>
      <Link href='level-of-fitness'>
        <div onClick={handleClick}>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default TargetWeight;
