import "../styles/index.css";
import splitbee from "@splitbee/web";
import { Analytics } from "@vercel/analytics/react";

splitbee.init();

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
