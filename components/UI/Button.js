import React,{useState} from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
const style = {
  wrapper: "cursor-pointer flex items-center jusitify-center bg-orange-700 max-w-fit px-6 py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 hover:bg-orange-600 transition duration-[400ms] rounded",
  btn:'text-xl'
};

export const Button = () => {
    const [isEnter,setIsEnter] = useState(false)
    const handleEnter = () => { 
        setIsEnter(true)
     }
    const handleLeave = () => { 
        setIsEnter(false)
     }
  return (
    <div className={style.wrapper} onMouseEnter={handleEnter} onMouseLeave={handleLeave} >
      <button className={style.btn}>Continue</button>
      <AiOutlineArrowRight className={`ml-3 text-xl text-gray-200 transition duration-[300ms] transform ${isEnter && 'translate-x-2  text-gray-300'}`}/>
    </div>
  );
};
