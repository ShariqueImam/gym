import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";
import React,{useState} from "react";
import OpenMenu from "../components/OpenMenu/OpenMenu";
function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Head>
        <title key={"title"}>Madplans Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="sharique Imam Portfolio sharique shariq sharriq"
        />
      </Head>
      <div
        className="overflow-x-hidden scroll-smooth home-bg z-0 w-[100vw]"
        style={{ fontDisplay: "swap" }}
      >
        <AnimatePresence exitBeforeEnter>
          <div key={asPath}>
            <Navbar menu={handleMenu} />
            {isOpen && <OpenMenu menu={handleMenu}/>}
            {!isOpen &&  <Component {...pageProps} onClick={handleMenu}/>}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
