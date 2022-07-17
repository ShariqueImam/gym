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
const Email = () => {
  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((val) => val);
  const handleClick = () => {
    // add the name in the store or context
    emailReset();
  };
  return (
    <Animator>
    <div className={style.wrapper}>
      <SmallHeading text="✅ Your workout and meal plan are almost ready!" />
      <MainHeading text="Let's create your account" />
      <div
        className={style.container}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <label htmlFor="name" className="text-gray-200 my-4">
          Email
        </label>
        <input
          id="name"
          type="text"
          placeholder="Email"
          className={style.input}
          value={email}
          onChange={emailChangeHandler}
        />
        <h2 className="text-gray-100 my-3">We respect your privacy and take protecting it very seriously — no spam</h2>
      </div>
      <Link href="/email">
        <div onClick={handleClick}>
          <Button />
        </div>
      </Link>
    </div>
    </Animator>
  );
};

export default Email;