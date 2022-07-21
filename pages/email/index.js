import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Cookies from "js-cookie";
const style = {
  wrapper: "flex flex-col my-8",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto my-12",
  input:
    "my-3 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
};
const Email = () => {
  const [email, setEmail] = useState(
    Cookies.get("email") ? Cookies.get("email") : ""
  );
  console.log(email)
  const [Checked, setChecked] = useState(false);
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const handleClick = () => {
    setChecked(true);
    Cookies.set("email", email);
  };
  return (
    <>
      <ProgressBar scrollLength={"100%"} val={25} />

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

            {Checked && (
              <p className={`${valid ? "hidden" : "flex"}  text-red-500`}>
                Enter a valid email
              </p>
            )}
            <h2 className="text-gray-100 my-3">
              We respect your privacy and take protecting it very seriously — no
              spam
            </h2>
          </div>
          <Link href={`${ valid > 0 ? "/commitment" : ""}`}>
            <div onClick={handleClick}>
              <Button dis={email.length > 0 ? false : true} />
            </div>
          </Link>
        </div>
      </Animator>
    </>
  );
};

export default Email;
