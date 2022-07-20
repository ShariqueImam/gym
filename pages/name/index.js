import React, { useState, useContext, useEffect } from "react";
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
    "my-3 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-500 w-[100%] text-gray-200 bg-stone-800",
};
// let {
//   value: name,
//   valueIsValid: nameIsValid,
//   hasError: nameHasError,
//   inputChangeHandler: nameChangeHandler,
//   reset: nameReset,
// } = useInput((val) => val.includes(0));
const Name = (props) => {
  const [name, setName] = useState(
    Cookies.get("name") ? Cookies.get("name") : ""
  );
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    props.setData({ types: "name", value: name });
    setName("");
  };
  return (
    <>
      <ProgressBar scrollLength={"92%"} val={23} />
      <Animator className={style.wrapper}>
        <SmallHeading text="✅ Your workout and meal plan are almost ready!" />
        <MainHeading text="Let's create your account" />
        <div
          className={style.container}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <label htmlFor="name" className="text-gray-200 my-4">
            What should we call you?
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className={style.input}
            value={name}
            onChange={changeHandler}
          />
        </div>
        <Link href="/dob">
          <div onClick={handleClick}>
            <Button />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Name;
