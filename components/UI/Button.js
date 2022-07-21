import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Button = ({ dis }) => {
  const style = {
    wrapper: ` flex items-center justify-center ${
      dis
        ? "bg-orange-800 cursor-not-allowed"
        : "bg-orange-600 cursor-pointer  hover:bg-orange-500"
    }  max-w-fit px-6 py-2 md:px-8 md:py-3 lg:px-8 lg:py-3 transition duration-[400ms] mx-auto my-6`,
    btn: `text-xl text-gray-100 tracking-wider font-bold ${
      dis ? "cursor-not-allowed" : "cursor-pointer"
    }`,
  };
  const [isEnter, setIsEnter] = useState(false);
  const handleEnter = () => {
    setIsEnter(true);
  };
  const handleLeave = () => {
    setIsEnter(false);
  };
  return (
    <div
      className={style.wrapper}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className={style.btn} disabled={dis}>
        Continue
      </button>
      <AiOutlineArrowRight
        className={` ml-3 text-xl text-gray-100 transition duration-[300ms] transform ${
          isEnter && !dis && "translate-x-2 text-gray-100 font-bold"
        }`}
      />
    </div>
  );
};
