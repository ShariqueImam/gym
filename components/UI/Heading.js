import React from 'react'


const style ={
  mainHeading:'w-[95%] md:w-[75%] lg:w-[45%] mx-auto text-gray-200 text-3xl md:text-4xl lg:text-5xl text-center my-6',
  smallHeading:'text-gray-400 text-center text-sm my-3',
}

export const MainHeading = ({text}) => {
  return (
    <div className={style.mainHeading} style={{fontFamily:"Poppins, sans-serif"}}>{text}</div>
  )
}
export const SmallHeading = ({text}) => {
  return (
    <div className={style.smallHeading} style={{fontFamily:"Poppins, sans-serif"}}>
      {text}
    </div>
  )
}



