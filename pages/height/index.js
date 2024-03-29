import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";

const style = {
  wrapper: "flex flex-col",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto",
  input:
    "my-4 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
  height: "text-gray-200 my-8 mx-6",
};

const Height = () => {
  const [Unit, setUnit] = useState("cm");
  const [height, setHeight] = useState("");
  const [click, setClick] = useState(false);
  const valid = /^[0-9]+$/.test(height) && +height < 300 && +height > 100;
  const heightChangeHandler = (e) => {
    setHeight(e.target.value);
  };
  const handleClick = () => {
    if (Unit === "cm") {
      Cookies.set("height", height);
    } else {
      Cookies.set("height", height * 0.3048);
    }
    setClick(true);
  };
  const handleUnit = (value) => {
    setUnit((prev) => {
      if (value === prev) {
        return "";
      } else {
        return value;
      }
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"16%"} val={4} link="/problem-area"/>
      <Animator className={style.wrapper}>
        <MainHeading text={"What's your height?"} />
        {/* the unit box */}
        <div
          className={style.container}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {/* UNITS  */}
          <div className="flex my-12 items-center justify-center">
            <h2 className="text-stone-400 flex-1">Units</h2>
            <div className="flex items-center justify-center">
              <h2
                className={`text-stone-200 bg-stone-700 px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 ${
                  Unit === "ft" && "border-orange-600"
                }`}
                onClick={() => handleUnit("ft")}
              >
                ft
              </h2>
              <h2
                className={`text-stone-200 bg-stone-700 px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 ${
                  Unit === "cm" && "border-orange-600"
                }`}
                onClick={() => handleUnit("cm")}
              >
                cm
              </h2>
            </div>
          </div>
          <label htmlFor="height" className="text-gray-200 my-4">
            Height:
          </label>
          <input
            id="height"
            type="text"
            placeholder={`${Unit === "cm" ? "__cm" : "__ft"}`}
            className={style.input}
            value={`${height}`}
            onChange={heightChangeHandler}
          />
          {click && Unit === "cm" && (
            <p className={`${valid ? "hidden" : "flex"}  text-red-500`}>
              {" "}
              Height should be between 100cm and 300cm
            </p>
          )}
          {click && Unit === "ft" && (
            <p className={`${valid ? "hidden" : "flex"}  text-red-500`}>
              {" "}
              Height should be between 3ft and 9ft
            </p>
          )}

          <h2 className={style.height}>
            Your Height: {height}
            {`${Unit === "cm" ? "cm" : "ft"}`}
          </h2>
        </div>
        <Link href={`${valid ? "/target-weight" : ""}`}>
          <div onClick={handleClick} className={`mt-64 md:mt-2`}>
            <Button text={'Continue'} dis={height.length > 0 ? false : true} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Height;
