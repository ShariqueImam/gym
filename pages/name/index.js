import React from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import useInput from "../../components/hooks/validateInput";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";

const style = {
  wrapper: "flex flex-col my-8",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto my-12",
  input:
    "my-3 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
};
const Name = () => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useInput((val) => val.includes(0));
  const handleClick = () => {
    // add the name in the store or context
    nameReset();
  };
  return (
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
          onChange={nameChangeHandler}
        />
      </div>
      <Link href="/dob">
        <div onClick={handleClick}>
          <Button />
        </div>
      </Link>
    </Animator>
  );
};

export default Name;
