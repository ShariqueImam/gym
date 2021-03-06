import React from "react";
import { MainHeading } from "../../UI/Heading";
import { GiMuscleUp, GiGrowth } from "react-icons/gi";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { DiGoogleAnalytics } from "react-icons/di";
import Image from "next/image";
const style = {
  wrapper: "",
  container: "w-[95%] md:w-[40%] mx-auto flex flex-col md:flex-row",
  left: "w-[95%] md:w-[60%] mx-auto",
  right: "w-[95%] md:w-[35%] mx-auto flex items-center justify-center",
  singleGet: "my-24",
  text: "text-gray-200 text-xl md:text-2xl my-8 text-center md:text-left",
};
const Get = () => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,sans-serif" }}>
      <MainHeading text={"What you get:"} />
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.singleGet}>
            <GiMuscleUp className=" text-6xl mx-auto md:mx-0 md:text-6xl p-4 bg-orange-600 text-gray-200 rounded-full" />
            <h2 className={style.text}>Personalized workout program</h2>
          </div>
          <div className={style.singleGet}>
            <BsFillCalendar2CheckFill className=" text-6xl mx-auto md:mx-0 md:text-6xl p-4 bg-orange-600 text-gray-200 rounded-full" />
            <h2 className={style.text}>
              Clear and easy to follow workout plan
            </h2>
          </div>
          <div className={style.singleGet}>
            <GiGrowth className=" text-6xl mx-auto md:mx-0 md:text-6xl p-4 bg-orange-600 text-gray-200 rounded-full" />
            <h2 className={style.text}>Visible results after first month</h2>
          </div>
          <div className={style.singleGet}>
            <DiGoogleAnalytics className=" text-6xl mx-auto md:mx-0 md:text-6xl p-4 bg-orange-600 text-gray-200 rounded-full" />
            <h2 className={style.text}>Progress tracking and analysis</h2>
          </div>
        </div>
        {/* adding the phone */}
        <div className={style.right}>
          <Image src={'/final/2.webp'} width={300} height={700}/>
        </div>
      </div>
    </div>
  );
};

export default Get;
