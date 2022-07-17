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
    "ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
    height:'text-gray-200 my-8 mx-6'
};
const Height = () => {
  const {
    value: height,
    valueIsValid: heightIsValid,
    hasError: heightHasError,
    inputChangeHandler: heightChangeHandler,
    reset: heightReset,
  } = useInput((val) => val.includes(0));
  const handleClick = () => {

  };

  return (
    <Animator className={style.wrapper}>
      <MainHeading text={"What's your height?"} />
      {/* the unit box */}
      <div className={style.container} style={{fontFamily:'Poppins, sans-serif'}}>
        <label htmlFor="height" className="text-gray-200 my-4">Height:</label>
        <input
        id="height"
          type="text"
          placeholder="__cm"
          className={style.input}
          value={`${height}`}
          onChange={heightChangeHandler}
        />
      <h2 className={style.height}>Your Height: {height}cm</h2>
      </div>
      <Link href="target-weight">
        <div onClick={handleClick}>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default Height;
