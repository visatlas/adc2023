import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-gray-200">
        <Head>
          <link rel="preload" href="/fonts/inter-latin-variable-wghtOnly-normal.woff2" as="font" type="font/woff2"
            crossOrigin="anonymous" />
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
