import React from "react";
import Goal from "./Goal";
import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import {motion } from 'framer-motion'
import {Button} from '../UI/Button'
const style = {
  wrapper:
    " w-[95%] md:w-[80%] lg:w-[70%] mx-auto my-12 flex flex-col md:flex-row text-[#FFF4ED] ",
  left: "md:w-[50%] flex-1 flex flex-col",
  right: "md:w-[40%]",
  tag: "flex flex-col flex-1 mx-auto",
  heading:
    " text-5xl md:text-5xl lg:text-6xl mx-auto md:mx-0 w-[80%] md:w-[70%] my-4 md:my-12 tracking-wide",
  para: "text-sm text-center md:text-left",
  allow: "hidden md:flex flex-col ",
  allow1: "flex items-center my-4 w-[90%] md:w-[70%]",
  allowSmall: "flex md:hidden flex-col p-4",
  checkbox: "bg-transparent accent-orange-600  a mx-3",
  recommend: "text-xs text-stone-400 my-2",
};
const Home = () => {
  const container = {
    hidden: { opacity:0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <motion.div className={style.wrapper}  variants={container}
    initial="hidden"
    animate="show">
      <div className={style.left}>
     
        <div className={style.tag}>
          <h2 className={style.heading} style={{fontFamily:'Yeseva One, cursive'}}>BUILD YOUR PERFECT BODY</h2>
          <p className={style.para} style={{fontFamily:'Poppins, sans-serif'}}>Get a personalized workout program</p>
        </div>
        <div className={style.allow} style={{fontFamily:'Poppins, sans-serif'}}>
          <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked1}
              setState={setChecked1}
              onClick={() => setChecked1((prev) => !prev)} 
            ></Switch>{" "}
            <div onClick={() => setChecked1((prev) => !prev)} className="mx-4">
              By continuing, I agree with{" "}
              <span className="text-orange-600 cursor-pointer">
                Terms of service
              </span>{" "}
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Privacy policy
              </span>
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Refund policy
              </span>
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Subscription Terms
              </span>
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Cookie policy
              </span>
            </div>
          </div>
          <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked2}
              setState={setChecked2}
              onClick={() => setChecked2((prev) => !prev)}
            ></Switch>
            <div onClick={() => setChecked2((prev) => !prev)} className="mx-4">
              {" "}
              I would like to receive updates about products, services, and
              special offers from MadMuscles via email
            </div>
          </div>
          <p className={style.recommend}>
            We recommend that you consult with your physician before beginning
            any exercise program
          </p>
        </div>
      </div>

      <div className={style.right}>
        <Goal />
      </div>
      <div className={style.allowSmall}>
      <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked1}
              setState={setChecked1}
              onClick={() => setChecked1((prev) => !prev)}
            ></Switch>{" "}
            <div onClick={() => setChecked1((prev) => !prev)} className="mx-4">
              By continuing, I agree with{" "}
              <span className="text-orange-600 cursor-pointer">
                Terms of service
              </span>{" "}
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Privacy policy
              </span>
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Refund policy
              </span>
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Subscription Terms
              </span>
              ,{" "}
              <span className="text-orange-600 cursor-pointer">
                Cookie policy
              </span>
            </div>
          </div>
          <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked2}
              setState={setChecked2}
              onClick={() => setChecked2((prev) => !prev)}
            ></Switch>
            <div onClick={() => setChecked2((prev) => !prev)} className="mx-4">
              {" "}
              I would like to receive updates about products, services, and
              special offers from MadMuscles via email
            </div>
          </div>
            <p className={style.recommend}>
            We recommend that you consult with your physician before beginning
            any exercise program
          </p>
        
         
      </div>
    </motion.div>
  );
};

export default Home;
