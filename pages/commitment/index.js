import React, { useEffect } from "react";
import Counter from "../../components/Counter/Counter";
import { useRouter } from "next/router";
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const style = {
  wrapper: "flex items-center justify-center mx-auto h-[80vh] w-[100vw]",
};
const index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/final-page");
    }, 4500);
  }, []);

  return (
    <div className={style.wrapper}>
      <Counter />
    </div>
  );
};

export default index;
