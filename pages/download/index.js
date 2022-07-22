import React, { useState, useEffect } from "react";
import client from "../api/client";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";

const index = (props) => {
  const [Val, setVal] = useState(Cookies.get("target-body"));
  const [Code, setCode] = useState(Cookies.get(0));
  if (Val === "slim"){
    setCode(0)
  }
  if (Val === "slimshredded"){
    setCode(1)
  }
  if (Val === "athlete"){
    setCode(2)
  }
  if (Val === "hero"){
    setCode(3)
  }
  if (Val === "bodybuilder"){
    setCode(4)
  }
  if (Val === "beachbody"){
    setCode(5)
  }
  if (Val === "workoutbody"){
    setCode(6)
  }
  if (Val === "crossfitbody"){
    setCode(7)
  }
    <Animator>
      <div
        className=" w-[95%] md:w-[75%] lg:w-[45%] mx-auto flex flex-col"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <h2 className="text-orange-600 text-6xl text-center my-8">
          Payment Successful.
        </h2>
        <h2 className="text-gray-50 text-lg text-center">
          Download You Plan from the DOWNLOAD button.
        </h2>

        <button className="bg-orange-600 text-gray-50 px-6 md:px-8 py-3 md:py-4 max-w-fit mx-auto my-12 tracking-wide">
          <a
            href={`${props.data[0].FileURL}?dl=latexhseet-a4.pdf`}
            className="text-gray-100"
          >
            Download Plan
          </a>
        </button>
      </div>
    </Animator>;
};

export default index;
export async function getServerSideProps() {
  const data = await client.fetch(`*[_type=='plans']{name,
  'FileURL':plan.asset->url
  }`);
  return { props: { data } };
}
