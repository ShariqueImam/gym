import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const style = {
  wrapper: "flex flex-col my-8",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto my-12",
  input:
    "my-3 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
};
// const {
//   value: dob,
//   valueIsValid: dobIsValid,
//   hasError: dobHasError,
//   inputChangeHandler: dobChangeHandler,
//   reset: dobReset,
// } = useInput((val) => val);
const DOB = () => {
  const [dob, setDob] = useState(Cookies.get("dob") ? Cookies.get("dob") : "");

  const dobChangeHandler = (e) => {
    setDob(e.target.value);
  };
  const handleClick = () => {
    Cookies.set('dob',dob)
    setDob("");
  };

  return (
    <>
      <ProgressBar scrollLength={"96%"} val={24} />
      <Animator>
        <div className={style.wrapper}>
          <SmallHeading text="✅ Your workout and meal plan are almost ready!" />
          <MainHeading text="Let's create your account" />
          <div
            className={style.container}
            style={{fontFamily:'Inter,sans-serif'}}
          >
            <label htmlFor="name" className="text-gray-200 my-4">
              What is your date of birth?
            </label>
            <input
              id="name"
              type="text"
              placeholder="DD/MM/YEAR"
              className={style.input}
              value={dob}
              onChange={dobChangeHandler}
            />
          </div>
          <Link href={`${dob.length>0 ? '/email':''}`}>
          <div onClick={handleClick}>
          <Button dis={dob.length > 0 ? false : true} />
          </div>
        </Link>
        </div>
      </Animator>
    </>
  );
};

export default DOB;
