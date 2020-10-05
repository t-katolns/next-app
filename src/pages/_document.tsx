import NextDocument, { Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Head>
    );
  }
}

export default Document;
