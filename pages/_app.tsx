import "../styles/index.css";
import splitbee from "@splitbee/web"

splitbee.init()

function MyApp({ Component, pageProps }: any) {
    return <Component {...pageProps} />
}
  

  
export default MyApp