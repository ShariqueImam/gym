import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
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
        className="overflow-x-hidden scroll-smooth home-bg"
        style={{ fontDisplay: "swap" }}
      >
        <AnimatePresence>
          <Navbar />

          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
