import React, { useState } from "react";
import Image from "next/image";
import SinglePlanCard from "./SinglePlanCard";
import { Button } from "../../UI/Button";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
const style = {
  wrapper:
    "bg-neutral-900 px-3 md:px-12 py-8 md:py-12 flex flex-col md:flex-row w-[95%] md:w-[70%] lg:w-[60%] mx-auto",
  left: "w-[95%] md:w-[50%] flex items-center justify-center",
  right: "w-[95%] md:w-[50%] ",
};
const Plan = (val) => {
  const [item, setItem] = useState({
    name: "Apple AirPods",
    description: "Latest Apple AirPods.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    quantity: 1,
    price: 999,
  });
  const handleClick = (val) => {
    setItem({ name: "One", price: val });
  };
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  // setItem({ name: "One", price: val });
  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Image src={"/final/a.webp"} height={500} width={200} />
      </div>
      <div className={style.right}>
        <h2 className="text-xl text-gray-200 md:text-4xl">
          Choose the best plan for you
        </h2>
        <div onClick={() => handleClick(50)}>
          {/* <Link href={"/download"}> */}
          <SinglePlanCard text={"3-MONTH PLAN"} total={49.99} per={0.54} />
          {/* </Link> */}
        </div>
        <div onClick={() => handleClick(60)}>
          {/* <Link href={"/download"}> */}
          <SinglePlanCard text={"6-MONTH PLAN"} total={59.99} per={0.33} />
          {/* </Link> */}
        </div>
        <div onClick={() => handleClick(30)}>
          {/* <Link href={"/download"}> */}
          <SinglePlanCard text={"1-MONTH PLAN"} total={29.99} per={1.0} />
          {/* </Link> */}
        </div>
        <Link href="">
          <div onClick={createCheckOutSession}>
            <Button text={"Continue"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Plan;
