import Image from "next/image";
import React, { useState } from "react";

export const StartCard = ({ cardText, imgUrl }) => {
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(prev=>!prev);
    };
    const cardStyle = {
      card: `${isClick ? 'bg-neutral-800 border-orange-700':''} w-[90%] md:w-[40%] lg:w-[25%] mx-auto  px-8 py-1 my-5 flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition duration-[400ms] hover:border-orange-700 border-2 border-transparent`,
      smallHeading: "text-2xl md:text-2xl flex-1 text-gray-200",
    };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card} onClick={handleClick}>
      <h3 className={cardStyle.smallHeading}>{cardText}</h3>
      <Image src={imgUrl} width={120} height={150} />
    </div>
  );
};
