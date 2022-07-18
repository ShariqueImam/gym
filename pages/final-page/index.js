import React from "react";
import FinalPage from "../../components/FinalPage/FinalPage";
import Footer from "../../components/Footer/Footer";
import Animator from '../../components/UI/Animator'
const index = () => {
  return (
    <Animator>
      <FinalPage />
      <Footer />
      <div className="bg-neutral-900 text-stone-400 py-3 text-center">
        Any questions? We're here to help.
      </div>
      <div className="bg-neutral-900 flex items-center justify-center">
        <a
          href="/"
          className="block underline text-gray-200 py-3 text-sm md:text-xl mx-8 md:mx-16"
        >
          support@test.com
        </a>
        <a
          href="/"
          className="block underline text-gray-200 py-3 text-sm md:text-xl mx-8 md:mx-16"
        >
          +1(234)567 8129
        </a>
      </div>
      <p className="text-xs bg-neutral-900 text-stone-400 text-center py-4">
        REFER TO YOUR PROVIDER'S TARIFFS TO DETERMINE THE COST OF THIS CALL FROM
        YOUR COUNTRY | Design By Shariq
      </p>
    </Animator>
  );
};

export default index;
