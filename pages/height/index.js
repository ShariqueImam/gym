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

const Height = () => {
  const [height, setHeight] = useState("");
  const [click, setClick] = useState(false);
  const valid = /^[0-9]+$/.test(height) && +height < 300 && +height > 100;
  const heightChangeHandler = (e) => {
    setHeight(e.target.value);
  };
  const handleClick = () => {
    Cookies.set("height", height);
    setClick(true);
  };
  return (
    <>
      <ProgressBar scrollLength={"16%"} val={4} />
      <Animator className={style.wrapper}>
        <MainHeading text={"What's your height?"} />
        {/* the unit box */}
        <div
          className={style.container}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <label htmlFor="height" className="text-gray-200 my-4">
            Height:
          </label>
          <input
            id="height"
            type="text"
            placeholder="__cm"
            className={style.input}
            value={`${height}`}
            onChange={heightChangeHandler}
          />
          {click && (
            <p className={`${valid ? "hidden" : "flex"}  text-red-500`}>
              {" "}
              Height should be between 100cm and 300cm
            </p>
          )}

          <h2 className={style.height}>Your Height: {height}cm</h2>
        </div>
        <Link href={`${valid ? "/target-weight" : ""}`}>
          <div onClick={handleClick}>
            <Button dis={height.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Height;
