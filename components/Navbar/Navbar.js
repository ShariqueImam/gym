import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const style = {
  wrapper:
    "h-[10vh] w-[100%] md:w-[95%] lg:w-[90%] flex mx-auto items-center jusitfy-center",
  logo: "text-orange-500 text-2xl flex-1",
  container:'flex items-center justify-center'
};
const Navbar = () => {
  return (
    <div className={style.wrapper} style={{fontFamily:'Poppins, sans-serif'}}>
      <div className={style.logo}>Logo Here</div>
      <div className={style.container}>
        <h2 className="text-[#FFF4ED] mx-5">English</h2>
        <GiHamburgerMenu className="text-[#FFF4ED] text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
