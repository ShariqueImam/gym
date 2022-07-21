import Image from "next/image";
import React, { useState } from "react";

export const Card2 = ({ cardText,para, imgUrl ,isClick}) => {

  const cardStyle = {
    card: ` ${
      isClick ? "bg-neutral-800 border-orange-700" : ""
    } w-[90%] md:w-[40%] lg:w-[25%] mx-auto  px-8 py-2 my-5 flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition duration-[350ms] hover:border-orange-700 border-2 border-transparent`,
    smallHeading: "text-2xl md:text-2xl flex-1 text-gray-200",
    infoContainer:'flex flex-col',
    para:'text-gray-300 text-sm my-4'
  };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card}>
      <div className={cardStyle.infoContainer}>
        <h3 className={cardStyle.smallHeading}>{cardText}</h3>
        <p className={cardStyle.para}>{para}</p>
      </div>
      <Image src={imgUrl} width={120} height={160} />
    </div>
  );
};
