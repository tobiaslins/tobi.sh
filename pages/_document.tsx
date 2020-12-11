import Document, { Head, Html, Main, NextScript } from "next/document";

export default class DefaultDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "70eb6fd2c3fc491fbb0196db6b00ab55"}'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
