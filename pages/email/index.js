import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar1 from "../../components/ProgressBar/ProgressBar1";

import Cookies from "js-cookie";
const style = {
  wrapper: "flex flex-col my-8",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto my-6 md:my-2",
  input:
    "my-3 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
};
const Email = () => {
  const [email, setEmail] = useState(
    Cookies.get("email") ? Cookies.get("email") : ""
  );
  console.log(email);
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
      {/* <ProgressBar scrollLength={"100%"} val={25} /> */}

      <Animator>
        <div className={style.wrapper}>
          <div className="bg-stone-800 w-[90%] md:w-[40%] lg:w-[25%] mx-auto py-3">
            <p className="font-thin text-gray-50 tracking-wide text-lg md:text-md my-1 mx-5 text-left md:text-center">
              ✅ Your workout and meal plan are almost ready!
            </p>
          </div>
          <h2 className="w-[70%] md:w-[75%] lg:w-[45%] mx-auto text-gray-50 text-3xl md:text-3xl lg:text-4xl mx-5 md:mx-auto text-left md:text-center my-5 font-bold">
            Let's create your account
          </h2>
          <div className={style.container}>
            <ProgressBar1 scrollLength={"66%"} val={3} />
          </div>

          <div
            className={style.container}
            style={{ fontFamily: "Inter,sans-serif" }}
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
          <Link href={`${valid > 0 ? "/commitment" : ""}`}>
            <div onClick={handleClick}>
              <Button dis={email.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </Animator>
    </>
  );
};

export default Email;
