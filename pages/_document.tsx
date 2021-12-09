import Document, { Head, Html, Main, NextScript } from "next/document";

export default class DefaultDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
