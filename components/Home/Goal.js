import React from "react";
import Image from "next/image";
const style = {
  wrapper: "text-[#FFF4ED]",
  heading:'text-4xl md:text-4xl my-3 text-center md:text-left',
  cardContainer:'flex flex-col',
  card:'rounded-lg px-8 py-2 my-3 mx-3 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 cursor-pointer transition duration-[400ms] hover:border-orange-700 border-2 border-transparent ',
  smallHeading:'text-2xl md:text-2xl flex-1',
};
const Goal = () => {
  return (
    <div className={style.wrapper} style={{fontFamily:'Poppins, sans-serif'}}>
      <h2 className={style.heading}>Choose Your Goal</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.smallHeading}>Lose Weight</h3>
          <Image src="/1.webp" width={120} height={160} />
        </div>
        <div className={style.card}>
          <h3 className={style.smallHeading}>Gain Muscle Mass</h3>
          <Image src="/2.webp" width={120} height={160} />
        </div>
        <div className={style.card}>
          <h3 className={style.smallHeading}>Get Shredded</h3>
          <Image src="/3.webp" width={120} height={160} />
        </div>
      </div>
    </div>
  );
};

export default Goal;
